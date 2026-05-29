import React, { useState } from "react";

export default function Blogs() {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const blogs = [
    {
      id: 1,
      title: "Top Cricket Betting Strategies",
      desc: "Learn advanced betting strategies used by experienced players.",
      content: `
        <h2>Mastering Cricket Betting: Top Strategies for Success</h2>
        
        <p>Cricket betting requires a combination of knowledge, analysis, and strategic thinking. Here are the most effective strategies used by professional bettors:</p>
        
        <h3>1. Analyze Pitch and Weather Conditions</h3>
        <p>Pitch conditions play a crucial role in cricket outcomes. Green pitches favor fast bowlers, while dry pitches assist spinners. Weather conditions like humidity and cloud cover can also affect swing bowling. Always check the weather forecast before placing bets.</p>
        
        <h3>2. Study Team Form and Head-to-Head Records</h3>
        <p>Recent form is more important than historical performance. Check the last 5-10 matches of both teams. Pay attention to head-to-head records at specific venues, as some teams perform exceptionally well at certain grounds.</p>
        
        <h3>3. Player Availability and Injuries</h3>
        <p>Key player absences can drastically change match outcomes. Always check team news for injuries, rest periods, or national duty commitments. A team missing their star batsman or lead bowler is significantly weakened.</p>
        
        <h3>4. Live Betting Opportunities</h3>
        <p>In-play betting offers excellent opportunities. Watch the first few overs to understand pitch behavior and team approach. Odds fluctuate based on match situations, creating value betting opportunities.</p>
        
        <h3>5. Bankroll Management</h3>
        <p>Never bet more than 2-5% of your bankroll on a single match. Use a staking plan and avoid chasing losses. Successful betting is about consistency, not winning every bet.</p>
        
        <h3>6. Specialize in Specific Markets</h3>
        <p>Instead of betting on everything, specialize in 2-3 markets like top batsman, total runs, or method of dismissal. Deep knowledge of specific markets gives you an edge over casual bettors.</p>
        
        <p><strong>Pro Tip:</strong> Keep a betting journal to track your decisions, wins, and losses. Reviewing your performance helps identify strengths and areas for improvement.</p>
      `
    },
    {
      id: 2,
      title: "Best Live Casino Games",
      desc: "Explore the most popular live casino games trending this year.",
      content: `
        <h2>Top Live Casino Games to Play in 2024</h2>
        
        <p>Live casino games combine the convenience of online play with the authentic atmosphere of land-based casinos. Here are the most popular live dealer games this year:</p>
        
        <h3>1. Live Blackjack</h3>
        <p>Blackjack remains the king of live casino games. Professional dealers, multiple camera angles, and real-time interaction make this a favorite. Look for tables with favorable rules like dealer stands on soft 17 and the ability to double after split.</p>
        
        <h3>2. Live Roulette</h3>
        <p>Immersion roulette with multiple camera views, slow-motion replays, and chat features. Popular variants include:</p>
        <ul>
          <li><strong>Lightning Roulette:</strong> Multipliers up to 500x on lucky numbers</li>
          <li><strong>Immersive Roulette:</strong> Close-up camera angles and replays</li>
          <li><strong>Speed Roulette:</strong> Faster gameplay with 25-second rounds</li>
        </ul>
        
        <h3>3. Live Baccarat</h3>
        <p>Simple yet elegant, baccarat is perfect for high rollers and beginners alike. Popular variants include Speed Baccarat, No Commission Baccarat, and Peek Baccarat. Side bets like Player/Perfect Pair add extra excitement.</p>
        
        <h3>4. Live Game Shows</h3>
        <p>Evolution Gaming has revolutionized live casinos with game shows:</p>
        <ul>
          <li><strong>Crazy Time:</strong> Multiplier wheel with 4 bonus games</li>
          <li><strong>Monopoly Live:</strong> Combines wheel spin with Monopoly board game</li>
          <li><strong>Dream Catcher:</strong> Simple money wheel with multipliers</li>
          <li><strong>Deal or No Deal:</strong> Based on famous TV show</li>
        </ul>
        
        <h3>5. Live Poker</h3>
        <p>Three Card Poker, Casino Hold'em, and Texas Hold'em are popular choices. Live poker offers lower house edges compared to slot machines, especially if you play optimal strategy.</p>
        
        <h3>6. Andar Bahar & Teen Patti</h3>
        <p>Traditional Indian card games are now available in live formats. Fast-paced and easy to learn, these games have gained massive popularity among Asian players.</p>
        
        <p><strong>Tips for Live Casino Success:</strong> Always check table limits, understand the rules before playing, use bonuses wisely, and set loss limits before starting.</p>
      `
    },
    {
      id: 3,
      title: "Football Match Predictions",
      desc: "Expert tips and insights for upcoming football matches.",
      content: `
        <h2>Expert Football Match Predictions Guide</h2>
        
        <p>Making accurate football predictions requires analysis of multiple factors. Here's our comprehensive guide to improving your betting success:</p>
        
        <h3>Key Factors to Analyze:</h3>
        
        <h4>1. Team Form (Last 5-10 Matches)</h4>
        <p>Current form is the most reliable indicator. Look beyond wins/losses - analyze goals scored, conceded, possession percentages, and expected goals (xG) data. A team losing but creating chances may be due for a turnaround.</p>
        
        <h4>2. Head-to-Head Records</h4>
        <p>Some teams have psychological advantages over others. Check last 5-10 meetings, especially at the same venue. Certain stadiums are notoriously difficult for away teams.</p>
        
        <h4>3. Injury and Suspension News</h4>
        <p>Key player absences affect team strength significantly. Follow team news 24-48 hours before matches. A team missing their top scorer or main playmaker will struggle.</p>
        
        <h4>4. Home/Away Splits</h4>
        <p>Some teams are "flat track bullies" at home but struggle away. Compare home vs away statistics including goals, clean sheets, and points per game.</p>
        
        <h4>5. Motivation Levels</h4>
        <p>Consider what's at stake - title races, European qualification, relegation battles, or domestic cup progression. Teams with strong motivation often overperform.</p>
        
        <h4>6. Weather and Pitch Conditions</h4>
        <p>Heavy rain favors defensive teams and reduces goals. Extreme heat affects stamina, especially for visiting teams from cooler climates.</p>
        
        <h3>Popular Betting Markets:</h3>
        <ul>
          <li><strong>Match Result (1X2):</strong> Home win, draw, or away win</li>
          <li><strong>Both Teams to Score (BTTS):</strong> Will both teams score?</li>
          <li><strong>Over/Under Goals:</strong> Predict total goals (2.5 is standard)</li>
          <li><strong>Double Chance:</strong> Cover 2 of 3 possible outcomes</li>
          <li><strong>Correct Score:</strong> High odds, difficult to predict</li>
          <li><strong>Half-Time/Full-Time:</strong> Predict result at both intervals</li>
        </ul>
        
        <h3>Advanced Prediction Strategies:</h3>
        <p><strong>Value Betting:</strong> Compare your calculated probability with bookmaker odds. If you believe a team has 50% chance to win but odds imply 40%, that's value.</p>
        <p><strong>Poisson Distribution:</strong> Use statistical models to predict exact scorelines based on team attacking/defensive strengths.</p>
        <p><strong>Market Movements:</strong> Follow sharp money - if odds shorten significantly without news, professionals are backing that outcome.</p>
        
        <p><strong>Remember:</strong> No prediction is guaranteed. Always bet responsibly and never chase losses.</p>
      `
    },
    {
      id: 4,
      title: "Responsible Gaming Tips",
      desc: "How to enjoy betting responsibly and safely.",
      content: `
        <h2>Responsible Gaming: Your Guide to Safe Betting</h2>
        
        <p>Betting should be entertaining, not a way to make money. Follow these essential tips to maintain control and enjoy responsible gaming:</p>
        
        <h3>1. Set Strict Budget Limits</h3>
        <p>Decide your monthly entertainment budget for betting - never exceed what you can afford to lose. Treat betting like going to the movies or dining out. Once your budget is gone, stop until next month.</p>
        
        <h3>2. Never Chase Losses</h3>
        <p>Chasing losses is the most dangerous behavior in betting. Accept losses as part of entertainment. Doubling bets to recover losses leads to bigger losses and potential gambling problems.</p>
        
        <h3>3. Set Time Limits</h3>
        <p>It's easy to lose track of time while betting. Use alarms to limit sessions to 1-2 hours maximum. Take regular breaks to maintain clear judgment.</p>
        
        <h3>4. Use Responsible Gaming Tools</h3>
        <p>Most platforms offer these protection tools:</p>
        <ul>
          <li><strong>Deposit Limits:</strong> Daily, weekly, or monthly maximum deposits</li>
          <li><strong>Loss Limits:</strong> Stop betting after reaching loss threshold</li>
          <li><strong>Session Timers:</strong> Automatic logout after set time</li>
          <li><strong>Self-Exclusion:</strong> Temporarily or permanently block access</li>
          <li><strong>Reality Checks:</strong> Pop-up notifications showing time and money spent</li>
        </ul>
        
        <h3>5. Warning Signs to Watch For</h3>
        <p>Seek help if you experience:</p>
        <ul>
          <li>Betting with money meant for bills or essentials</li>
          <li>Lying to family about betting activities</li>
          <li>Borrowing money to bet or pay debts</li>
          <li>Selling possessions to fund betting</li>
          <li>Neglecting work, relationships, or health</li>
          <li>Feeling anxious or irritable when not betting</li>
        </ul>
        
        <h3>6. Keep Betting in Perspective</h3>
        <p>Remember that odds are designed for operator profit. The house always has an edge. View wins as lucky breaks, not skill. No betting system guarantees long-term profits.</p>
        
        <h3>7. Balance with Other Activities</h3>
        <p>Ensure betting isn't your only hobby. Maintain other interests - sports participation, reading, movies, socializing with friends, or family activities.</p>
        
        <h3>8. Never Bet Under Influence</h3>
        <p>Avoid betting when tired, emotional, or under alcohol/drugs influence. These states impair judgment and lead to poor decisions.</p>
        
        <h3>Help Resources:</h3>
        <ul>
          <li><strong>GamCare:</strong> Free support and counseling (0808 8020 133)</li>
          <li><strong>Gamblers Anonymous:</strong> 12-step support groups worldwide</li>
          <li><strong>BeGambleAware:</strong> Information and self-assessment tools</li>
          <li><strong>National Problem Gambling Helpline:</strong> 1-800-522-4700</li>
        </ul>
        
        <p><strong>Remember:</strong> If betting stops being fun, take a break. There's no shame in seeking help. Your wellbeing is more important than any bet.</p>
      `
    }
  ];

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

  return (
    <div className="p-4 md:p-12 max-w-6xl mx-auto">
      <div className="bg-white shadow-sm rounded-lg p-6 md:p-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#4a121a] mb-8 border-b pb-4 tracking-tight">
          Blogs
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="border rounded-lg p-5 hover:shadow-md transition-all bg-gray-50 flex flex-col"
            >
              <h3 className="text-lg font-bold text-[#4a121a] mb-2">
                {blog.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                {blog.desc}
              </p>
              <button
                onClick={() => openModal(blog)}
                className="mt-4 text-sm font-semibold text-[#a60a27] hover:underline inline-flex items-center gap-1"
              >
                Read More →
              </button>
            </div>
          ))}
        </div>
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
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8">
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
              />
              
              {/* Back to top button */}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="mt-6 text-sm text-[#a60a27] hover:underline"
              >
                ↑ Back to top
              </button>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-gray-50 border-t p-4 flex justify-end">
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