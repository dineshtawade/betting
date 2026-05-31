// src/pages/blogs/page.jsx
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { getBlogs } from '../../../services/communication';

export default function Blogs() {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch blogs from API
  const { data: blogsData, isLoading, error } = useQuery({
    queryKey: ['public-blogs'],
    queryFn: getBlogs,
  });

  const blogs = blogsData?.data || [];

  const openModal = (blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBlog(null);
    document.body.style.overflow = 'auto';
  };

  // Format content for display (handle both HTML and plain text)
  const formatContent = (content) => {
    if (!content) return '<p>No content available</p>';
    
    // If content already has HTML tags, return as is
    if (content.includes('<') && content.includes('>')) {
      return content;
    }
    
    // Otherwise, convert plain text to HTML paragraphs
    return content.split('\n\n').map(para => `<p>${para}</p>`).join('');
  };

  if (isLoading) {
    return (
      <div className="p-4 md:p-12 max-w-6xl mx-auto">
        <div className="bg-white shadow-sm rounded-lg p-6 md:p-10">
          <div className="flex justify-center items-center h-64">
            <div className="text-gray-600">Loading blogs...</div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 md:p-12 max-w-6xl mx-auto">
        <div className="bg-white shadow-sm rounded-lg p-6 md:p-10">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-600">
            Error loading blogs: {error.message}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-12 max-w-6xl mx-auto">
      <div className="bg-white shadow-sm rounded-lg p-6 md:p-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#4a121a] mb-8 border-b pb-4 tracking-tight">
          Blogs
        </h1>

        {blogs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No blogs available at the moment. Please check back later!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {blogs.map((blog) => (
              <div
                key={blog._id}
                className="border rounded-lg p-5 hover:shadow-md transition-all bg-gray-50 flex flex-col"
              >
                {blog.image && (
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                )}
                <h3 className="text-lg font-bold text-[#4a121a] mb-2">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                  {blog.description || (blog.content ? blog.content.substring(0, 150) + '...' : 'No description available')}
                </p>
                <div className="flex justify-between items-center mt-4">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    blog.status === 'published' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {blog.status || 'Published'}
                  </span>
                  <button
                    onClick={() => openModal(blog)}
                    className="text-sm font-semibold text-[#a60a27] hover:underline inline-flex items-center gap-1"
                  >
                    Read More →
                  </button>
                </div>
                {blog.createdAt && (
                  <p className="text-xs text-gray-400 mt-3">
                    Published: {new Date(blog.createdAt).toLocaleDateString()}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal for full content */}
      {isModalOpen && selectedBlog && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
              <h2 className="text-xl md:text-2xl font-bold text-[#4a121a]">
                {selectedBlog.title}
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 text-2xl w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
              >
                ×
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8">
              {selectedBlog.image && (
                <img 
                  src={selectedBlog.image} 
                  alt={selectedBlog.title} 
                  className="w-full h-64 md:h-96 object-cover rounded-lg mb-6"
                />
              )}
              
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ 
                  __html: formatContent(selectedBlog.content || selectedBlog.description)
                }}
              />
              
              {/* Blog Meta Info */}
              <div className="mt-8 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  {selectedBlog.author && (
                    <span>Author: {selectedBlog.author.name || selectedBlog.author.email}</span>
                  )}
                  {selectedBlog.createdAt && (
                    <span className="ml-4">
                      Published: {new Date(selectedBlog.createdAt).toLocaleDateString()}
                    </span>
                  )}
                  {selectedBlog.status && (
                    <span className={`ml-4 px-2 py-1 text-xs rounded-full ${
                      selectedBlog.status === 'published' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {selectedBlog.status}
                    </span>
                  )}
                </p>
              </div>

              {/* Back to top button */}
              <button
                onClick={() => {
                  const modalContent = document.querySelector('.max-h-\\[90vh\\]');
                  if (modalContent) modalContent.scrollTop = 0;
                }}
                className="mt-6 text-sm text-[#a60a27] hover:underline"
              >
                ↑ Back to top
              </button>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-gray-50 border-t p-4 flex justify-end gap-3">
              <button
                onClick={closeModal}
                className="px-6 py-2 bg-[#4a121a] text-white rounded-lg hover:bg-[#6e1a26] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}