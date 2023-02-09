#Users
puts "🏕 Seeding users..."
User.create(username: "marojni", password_digest: "icecream")#1
User.create(username: "madhiker", password_digest: "hikingforever")#2
User.create(username: "newbootgoofin", password_digest: "reno")#3


#States
puts "🏕 Seeding states..."
State.create(name: "New York") #1
State.create(name: "New Hampshire") #2 
State.create(name: "Vermont") #3


#Trails
puts "🏕 Seeding trails..."
Trail.create(name: "Bear Mountain Loop", description: "Check out this 3.8-mile loop trail near Bear Mountain, New York. Generally considered a moderately challenging route, it takes an average of 2 h 18 min to complete. This is a very popular area for hiking and running, so you'll likely encounter other people while exploring. The best times to visit this trail are April through November.", location: "Bear Mountain State Park", image_url: "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvNTM4NTQ3MzMvMmY2NjQyZDZlNmIwYTU0ZDAwYzNiYTNiNzY2Y2I2MWUuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjoyMDQ4LCJoZWlnaHQiOjIwNDgsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsImpwZWciOnsidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWlzZVNjYW5zIjp0cnVlLCJxdWFudGlzYXRpb25UYWJsZSI6M319fQ==", miles: 3.8, state_id: 1, user_id: 3)

Trail.create(name: "Cornish Estate Trail", description: "Enjoy this 1.8-mile out-and-back trail near Cold Spring, New York. Generally considered an easy route, it takes an average of 43 min to complete. This is a very popular area for hiking and walking, so you'll likely encounter other people while exploring.", location: "HUdson Highlands State Park", image_url: "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMzEwNjkyMjYvMTMyYzNjMmJkMDkzYzlkMzE2MjkyYWQxNzM4MDg4YTkuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjoyMDQ4LCJoZWlnaHQiOjIwNDgsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsImpwZWciOnsidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWlzZVNjYW5zIjp0cnVlLCJxdWFudGlzYXRpb25UYWJsZSI6M319fQ==", miles: 1.8, state_id: 1, user_id: 2)

Trail.create(name: "Welch-Dickey Loop Trail", description: "Check out this 4.4-mile loop trail near Thornton, New Hampshire. Generally considered a challenging route, it takes an average of 3 h 8 min to complete. This is a very popular area for hiking and road biking, so you'll likely encounter other people while exploring.", location: "White Mountain National Forest", image_url: "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMjQzOTc4MzQvMWRhNzZjMjM3ODZlZmQ5YWM3NDc5MGM4ZmE3MDllYTUuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjoyMDQ4LCJoZWlnaHQiOjIwNDgsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsImpwZWciOnsidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWlzZVNjYW5zIjp0cnVlLCJxdWFudGlzYXRpb25UYWJsZSI6M319fQ==", miles: 4.4, state_id: 2, user_id: 1 )

Trail.create(name: "Sterling Pond Trail", description: "Explore this 2.2-mile out-and-back trail near Jeffersonville, Vermont. Generally considered a moderately challenging route, it takes an average of 1 h 37 min to complete. This is a very popular area for hiking and walking, so you'll likely encounter other people while exploring.", image_url:"https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMjg5NzE0MTcvZjdiNmU3YmQxNTQ2MDljZTAzOTcxNjlhMjY1N2M0MDMuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjoyMDQ4LCJoZWlnaHQiOjIwNDgsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsImpwZWciOnsidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWlzZVNjYW5zIjp0cnVlLCJxdWFudGlzYXRpb25UYWJsZSI6M319fQ==", miles: 2.2, state_id: 3, user_id: 3)

