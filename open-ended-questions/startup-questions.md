##Questions asked by seed stage to series-A startups in Austin
###Would your webapp scale for 10,000 users, and how?
Talk about the backend. If you're using a BaaS like Firebase, you might explain how it is great for prototyping quickly but to stay flexible you would build a custom backend. Building your own backend would also keep costs down since BaaS' can get expensive when scaling. Other chokepoints for scaling an app might be increased complexity in your data models.

###How are devops important to a startup and give an example of you doing devops?
I've integrated a number of automated tools to keep my development team running smoothly and quickly with hyper-communication being central to our success.

Examples

1. Spun up an AWS EC2 server and configured it for a MEAN stack application to scale for a few thousand users.
2.Integrated a Trello feature board and Github repo into our team's slack channel to keep team members communicating in a central place.

###What architectural decisions did you have to make when building your webapp?
Talk about using one technology over another and how you organized your code at a high level.
I decided to use a BaaS like Firebase instead of building an entirely custom Node backend because my data models are very simple and my timeframe only allowed for rapid prototyping of the app. I chose Firebase over Parse because their GUI was simple to follow, they have AngularFire to give me easy to use methods for my Angular SPA authentication, and their security rules are simple to write.
You could also talk about how you organized your app's directory to make it intuitive for a new dev to hop on the project.
