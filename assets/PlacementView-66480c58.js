import{_ as e}from"./_plugin-vue_export-helper-c27b6911.js";import{o as t,c as a,a as s}from"./index-08923b6e.js";const o="/assets/finalLeaderboard-9a9dd51f.png",r="/assets/userPoints-8858f055.png",i="/assets/leaderboardView-52da05b6.png",l="/assets/rescriptProject-5d286ea7.png",n="/assets/githubAction-9acc7a61.png",d={},c={class:"min-h-full"},p=s('<header class="shadow"><div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8"><h1 class="text-2xl font-bold tracking-tight text-blue-900">(WIP) Griffith University Work Integrated Learning Placement </h1></div></header><main class="px-4 py-10 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col gap-8"><div><div class="mb-32"><h3 class="text-lg font-bold pb-2 border-b-2 mb-4">Critical Analysis of Placement</h3><figure><img class="border-4 border-black rounded-xl m-auto" width="800" src="'+o+'"><figcaption class="italic text-gray-500 text-center">School leaderboard on public website</figcaption></figure></div><div class="mb-32"><h3 class="text-lg font-bold pb-2 border-b-2 mb-14">Evidence of Technical and Transferable Skills/Knowledge </h3><div class="mb-14"><h5 class="text-md font-bold mb-3">Building a backend database in Hasura</h5><div class="flex flex-row gap-10 mb-4"><div class="flex flex-col gap-5"><img class="border-4 border-black rounded-xl" width="800" src="'+r+'"><img class="border-4 border-black rounded-xl" width="800" src="'+i+'"></div><p class="w-1/2 text-justify"> Hasura with PostrgresQL was used to construct the necessary tables to store data for the public school leaderboard. These screenshots from the Hasura console show the tables created with their column names. <br><br> The primary table that stores all relevant data for the school leaderboard is the user_points_daily_snapshots table. This table is updated every time a user completes work in the program. A consumer picks the work complete message off the bus and then writes to this table in Hasura. As the table name suggests, this table represents a daily snapshot of points earned for each user along with the account they belong to. This information can then be used to construct the total points for a specific account in a given date range. <br><br> (Result) <br><br> From this experience I learned how to </p></div></div><div class="mb-14"><h5 class="text-md font-bold mb-3">Building a frontend app with Rescript and Vite</h5><div class="flex flex-col gap-10 mb-4 align-center"><p> For the frontend app to display the public school leaderboard, a self-contained Rescript app was developed, and then built using Vite. The built app was then uploaded to AWS S3 where it is referenced from the WordPress site. <br><br> To complete this portion of the placement, I needed to learn how to build a Rescript app from scratch. This required me to consider any necessary packages and dependencies for the app, which were defined in the <code>package.json</code> and <code>bsconfig.json</code> files. I used tailwindcss for the styling of the app, so I needed to learn how to incorporate tailwind into a React app. <br><br> As a result of this task, I was able to successfully develop a standalone RescriptReact app that correctly referenced the built tailwindcss output, correcly rendered the leaderboard container and used all necessary dependencies. <br><br> Although before this placement I already had knowledge of RescriptReact, I was required to develop a completely standalone app which was something I had not done before using Rescript. This was a valuable learning experience and I learned a lot about how to create a React app from scratch, how to incorporate tailwindcss into a React app and how to build a React app using Vite. I believe this will be very valuable knowledge for my future career as a software developer. </p><img class="border-4 border-black rounded-xl m-auto" width="1000" src="'+l+'"></div></div><div><h5 class="text-md font-bold mb-3">Deploying an app with Github Actions</h5><div class="flex flex-col gap-10 mb-4 align-center"><p> Context <br><br> Action <br><br> Result <br><br> Learning </p><img class="border-4 border-black rounded-xl m-auto" width="1000" src="'+n+'"></div></div></div><div class="mb-32"><h3 class="text-lg font-bold pb-2 border-b-2 mb-4">Evidence of My Awareness of Ethical Conduct</h3></div><div class="mb-32"><h3 class="text-lg font-bold pb-2 border-b-2 mb-4">Holistic Experience Artefact Linked to Key Skills</h3><p>In addition to the above described placement, I have also obtained industry experience as a Junior Software Developer where I gained valuable skills and knowledge.</p></div></div></main>',2),b=[p];function h(f,m){return t(),a("div",c,b)}const w=e(d,[["render",h]]);export{w as default};
