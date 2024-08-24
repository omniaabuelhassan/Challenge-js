const users = [
                    { id: 1, name: 'Kareem Hassan', posts: [
                        { title: 'Understanding the Importance of Self-Care', content: `In our busy lives, self-care often takes a backseat. It's crucial to make time for activities that nurture your mind, body, and spirit. Whether it's reading a book, meditating, or taking a walk in nature, these small moments can make a big difference.` },
                        { title: 'The Rise of Remote Work: A New Normal', content: `Remote work has reshaped the global workforce, offering flexibility but also challenges. While it has allowed many to balance work and life better, it also requires new strategies for staying productive and connected with colleagues.` },
                        { title: 'The Benefits of Regular Exercise', content: `Regular exercise is essential for maintaining physical and mental health. It can improve mood, increase energy levels, and reduce the risk of chronic diseases. Find an activity you enjoy and make it a part of your routine.` },
                        { title: 'Mindfulness Techniques for Better Focus', content: `Practicing mindfulness can help improve your concentration and reduce stress. Techniques such as deep breathing, meditation, and mindful eating can enhance your overall well-being and productivity.` },
                        { title: 'Time Management Tips for Busy Professionals', content: `Effective time management is crucial for balancing work and personal life. Prioritize tasks, set clear goals, and use tools like calendars and to-do lists to stay organized and efficient.` },
                        { title: 'How to Foster Creativity in Your Daily Life', content: `Creativity can be nurtured through daily practices such as journaling, exploring new hobbies, and seeking inspiration from different sources. Embrace curiosity and make time for creative activities.` },
                        { title: 'Navigating Career Transitions Successfully', content: `Career transitions can be challenging but also offer opportunities for growth. Assess your skills, seek mentorship, and stay open to new possibilities as you navigate changes in your professional path.` },
                        { title: 'The Impact of Nutrition on Mental Health', content: `What you eat can significantly affect your mental health. Incorporate a balanced diet rich in fruits, vegetables, whole grains, and lean proteins to support emotional well-being and cognitive function.` },
                        { title: 'Building Resilience Through Adversity', content: `Resilience is the ability to bounce back from setbacks. Strengthen your resilience by developing coping strategies, maintaining a positive outlook, and seeking support from others.` },
                        { title: 'The Importance of Setting Personal Goals', content: `Setting personal goals helps you stay motivated and focused on achieving what matters most to you. Break goals into manageable steps and regularly review your progress to stay on track.` }
                    ]},
                    { id: 2, name: 'Aya Ahmed', posts: [
                        { title: 'Healthy Eating on a Budget', content: `Eating healthy doesn’t have to be expensive. With a little planning and smart shopping, you can fill your plate with nutritious foods that won’t break the bank. Focus on seasonal produce, whole grains, and bulk items to save money.` },
                        { title: 'The Benefits of Learning a New Skill', content: `Learning something new, whether it’s a language, instrument, or craft, can enhance your cognitive abilities and provide a sense of accomplishment. It's never too late to pick up a new hobby or skill!` },
                        { title: 'Tips for Effective Meal Planning', content: `Meal planning can save time and reduce food waste. Plan your meals for the week, create a shopping list, and prepare meals in advance to ensure you have healthy options ready to go.` },
                        { title: 'Creating a Balanced Exercise Routine', content: `A well-rounded exercise routine includes cardiovascular, strength, and flexibility training. Incorporate a variety of activities to keep your workouts interesting and comprehensive.` },
                        { title: 'How to Improve Sleep Quality', content: `Good sleep is essential for overall health. Establish a consistent sleep schedule, create a relaxing bedtime routine, and make your sleep environment comfortable to improve sleep quality.` },
                        { title: 'The Importance of Hydration', content: `Staying hydrated is crucial for maintaining bodily functions and overall health. Aim to drink plenty of water throughout the day and limit consumption of sugary and caffeinated beverages.` },
                        { title: 'Strategies for Managing Work-Life Balance', content: `Achieving work-life balance requires setting boundaries and prioritizing self-care. Use time management techniques, delegate tasks when possible, and make time for activities you enjoy.` },
                        { title: 'How to Stay Organized at Home', content: `Organizing your home can reduce stress and increase productivity. Implement systems for decluttering, storage solutions, and maintaining cleanliness to create a more organized living space.` },
                        { title: 'The Benefits of Regular Social Interaction', content: `Social interactions are important for mental health and well-being. Maintain relationships with friends and family, and engage in social activities to enhance your emotional support network.` },
                        { title: 'Ways to Enhance Personal Productivity', content: `Boost your productivity by setting clear goals, minimizing distractions, and using productivity tools. Establish a routine and take breaks to maintain focus and efficiency.` }
                    ]},
                    { id: 3, name: 'Renad Mustafa', posts: [
                        { title: 'The Power of Positive Thinking', content: `Positive thinking can transform your outlook on life. By focusing on the good, even in challenging situations, you can improve your mental well-being and resilience. Remember, your thoughts shape your reality.` },
                        { title: 'Managing Stress in the Digital Age', content: `With constant notifications and information overload, managing stress in today’s digital world is vital. Consider setting boundaries, practicing mindfulness, and taking regular digital detoxes to maintain a healthy mind.` },
                        { title: 'The Benefits of Regular Meditation', content: `Meditation can reduce stress, improve focus, and enhance overall well-being. Incorporate a few minutes of meditation into your daily routine to experience its benefits.` },
                        { title: 'How to Set Achievable Goals', content: `Setting achievable goals involves defining clear objectives, breaking them into smaller steps, and tracking your progress. Adjust your goals as needed and celebrate your successes along the way.` },
                        { title: 'Building Stronger Communication Skills', content: `Effective communication is key to personal and professional success. Practice active listening, express yourself clearly, and seek feedback to improve your communication skills.` },
                        { title: 'The Role of Gratitude in Mental Health', content: `Practicing gratitude can enhance your mental health by shifting your focus from what’s lacking to what’s positive in your life. Keep a gratitude journal and express appreciation regularly.` },
                        { title: 'How to Develop Healthy Habits', content: `Developing healthy habits requires consistency and patience. Start with small, manageable changes, track your progress, and stay motivated by focusing on the benefits of your new habits.` },
                        { title: 'Balancing Work and Personal Life', content: `Achieving a balance between work and personal life is essential for overall well-being. Prioritize tasks, set boundaries, and make time for activities that bring you joy and relaxation.` },
                        { title: 'The Impact of Technology on Relationships', content: `Technology can both connect and isolate us. Use digital tools to stay in touch with loved ones but also make time for face-to-face interactions to maintain meaningful relationships.` },
                        { title: 'How to Overcome Procrastination', content: `Overcoming procrastination involves understanding the reasons behind it and implementing strategies like setting deadlines, breaking tasks into smaller steps, and using rewards to stay motivated.` }
                    ]},
                    { id: 4, name: 'Mo7ammed Ye7ya', posts: [
                        { title: 'Sustainability and Small Lifestyle Changes', content: `Going green doesn’t require drastic changes. Simple actions like reducing plastic use, conserving water, and recycling can make a significant impact. Every little bit helps in the fight against climate change.` },
                        { title: 'Building Strong Relationships in a Fast-Paced World', content: `In our fast-paced lives, nurturing relationships can be challenging. Make time for meaningful conversations, show appreciation, and actively listen to strengthen your connections with loved ones.` },
                        { title: 'Eco-Friendly Living Tips', content: `Adopting eco-friendly practices can reduce your environmental footprint. Consider using reusable products, conserving energy, and supporting sustainable brands to live more sustainably.` },
                        { title: 'The Importance of Volunteering', content: `Volunteering benefits both the community and yourself. It offers a sense of purpose, builds connections, and provides opportunities to develop new skills while making a positive impact.` },
                        { title: 'How to Create a Sustainable Garden', content: `A sustainable garden can reduce your environmental impact and provide fresh produce. Use organic practices, conserve water, and grow native plants to create an eco-friendly garden.` },
                        { title: 'The Benefits of Minimalist Living', content: `Minimalist living focuses on reducing clutter and simplifying life. By decluttering your space and focusing on what truly matters, you can enjoy a more organized and fulfilling lifestyle.` },
                        { title: 'Green Transportation Options', content: `Opting for green transportation methods like biking, walking, or using public transit can reduce your carbon footprint and promote a healthier lifestyle. Explore alternative ways to get around.` },
                        { title: 'How to Reduce Your Energy Consumption', content: `Reducing energy consumption helps save money and protect the environment. Implement energy-efficient practices such as using LED bulbs, unplugging devices, and improving home insulation.` },
                        { title: 'The Impact of Food Waste on the Environment', content: `Food waste contributes to greenhouse gas emissions and resource depletion. Reduce food waste by planning meals, using leftovers creatively, and composting organic waste.` },
                        { title: 'How to Support Local Businesses', content: `Supporting local businesses strengthens your community and boosts the local economy. Shop locally, attend community events, and promote local businesses to contribute to a thriving local economy.` }
                    ]},
                    { id: 5, name: 'Eman Yaser', posts: [
                        { title: 'The Art of Decluttering Your Space', content: `Decluttering your home can bring clarity and peace of mind. Start small, tackling one area at a time, and enjoy the benefits of a more organized and serene living space.` },
                        { title: 'How to Stay Motivated When Working from Home', content: `Working from home can blur the lines between personal and professional life. Stay motivated by setting clear goals, maintaining a routine, and creating a dedicated workspace.` },
                        { title: 'Strategies for Effective Work-Life Integration', content: `Work-life integration involves blending professional and personal responsibilities in a balanced way. Set boundaries, prioritize tasks, and ensure time for self-care and family.` },
                        { title: 'Tips for Effective Remote Collaboration', content: `Remote collaboration requires clear communication and coordination. Use collaboration tools, schedule regular check-ins, and establish clear expectations to work effectively with your team.` },
                        { title: 'How to Create a Productive Home Office', content: `Design a home office that fosters productivity by ensuring good lighting, ergonomics, and minimizing distractions. Keep your workspace organized and personalized to enhance focus.` },
                        { title: 'The Benefits of Regular Breaks at Work', content: `Taking regular breaks can improve productivity and prevent burnout. Incorporate short breaks into your work routine to rest, recharge, and maintain overall well-being.` },
                        { title: 'How to Set Up a Successful Remote Work Routine', content: `A successful remote work routine involves setting regular work hours, creating a structured daily schedule, and maintaining a healthy work-life balance to stay productive.` },
                        { title: 'The Impact of Ergonomics on Workplace Health', content: `Good ergonomics in your workspace can prevent discomfort and injuries. Invest in ergonomic furniture, adjust your workstation, and practice proper posture to improve workplace health.` },
                        { title: 'Tips for Managing Remote Team Dynamics', content: `Managing remote teams requires effective communication and trust-building. Use digital tools to facilitate collaboration, provide regular feedback, and foster a sense of team cohesion.` },
                        { title: 'How to Balance Productivity and Relaxation', content: `Balancing productivity and relaxation is key to maintaining overall well-being. Incorporate time for relaxation and leisure into your schedule to prevent burnout and enjoy a well-rounded life.` }
                    ]}
                ];
                                
             
                document.querySelectorAll('.User li a').forEach((userElement, index) => {
                    userElement.addEventListener('click', () => {
                        displayPosts(users[index].posts);
                    });
                });
                
              
                function displayPosts(posts) {
                    const postList = document.querySelector('.posts ul');
                    postList.innerHTML = ''; // Clear the previous posts
                
                    posts.forEach(post => {
                        const li = document.createElement('li');
                        const div = document.createElement('div');
                        div.className = 'post';
                        
                        const h1 = document.createElement('h1');
                        h1.textContent = post.title;
                
                        const hr = document.createElement('hr');
                
                        const p = document.createElement('p');
                        p.textContent = post.content;
                
                        div.appendChild(h1);
                        div.appendChild(hr);
                        div.appendChild(p);
                        li.appendChild(div);
                        postList.appendChild(li);
                    });
                }
                