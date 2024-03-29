# Users
# puts "🏕 Seeding users..."
# User.create(username: "clemi", password_digest: "tabby")#1
# User.create(username: "dudewheresmycar", password_digest: "dude")#2
# User.create(username: "hello", password_digest: "goodbye")#3


# #States
# puts "🏕 Seeding states..."
# State.create(name: "New York") #1
# State.create(name: "New Hampshire") #2 
# State.create(name: "Vermont") #3


# #Trails
# puts "🏕 Seeding trails..."
# Trail.create(name: "Bear Mountain Loop", description: "Check out this 3.8-mile loop trail near Bear Mountain, New York. Generally considered a moderately challenging route, it takes an average of 2 h 18 min to complete. This is a very popular area for hiking and running, so you'll likely encounter other people while exploring. The best times to visit this trail are April through November.", location: "Bear Mountain State Park", image_url: "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvNTM4NTQ3MzMvMmY2NjQyZDZlNmIwYTU0ZDAwYzNiYTNiNzY2Y2I2MWUuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjoyMDQ4LCJoZWlnaHQiOjIwNDgsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsImpwZWciOnsidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWlzZVNjYW5zIjp0cnVlLCJxdWFudGlzYXRpb25UYWJsZSI6M319fQ==", miles: 3.8, state_id: 1, user_id: 3)

# Trail.create(name: "Cornish Estate Trail", description: "Enjoy this 1.8-mile out-and-back trail near Cold Spring, New York. Generally considered an easy route, it takes an average of 43 min to complete. This is a very popular area for hiking and walking, so you'll likely encounter other people while exploring.", location: "Hudson Highlands State Park", image_url: "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMzEwNjkyMjYvMTMyYzNjMmJkMDkzYzlkMzE2MjkyYWQxNzM4MDg4YTkuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjoyMDQ4LCJoZWlnaHQiOjIwNDgsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsImpwZWciOnsidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWlzZVNjYW5zIjp0cnVlLCJxdWFudGlzYXRpb25UYWJsZSI6M319fQ==", miles: 1.8, state_id: 1, user_id: 2)

# Trail.create(name: "Welch-Dickey Loop Trail", description: "Check out this 4.4-mile loop trail near Thornton, New Hampshire. Generally considered a challenging route, it takes an average of 3 h 8 min to complete. This is a very popular area for hiking and road biking, so you'll likely encounter other people while exploring.", location: "White Mountain National Forest", image_url: "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMjQzOTc4MzQvMWRhNzZjMjM3ODZlZmQ5YWM3NDc5MGM4ZmE3MDllYTUuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjoyMDQ4LCJoZWlnaHQiOjIwNDgsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsImpwZWciOnsidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWlzZVNjYW5zIjp0cnVlLCJxdWFudGlzYXRpb25UYWJsZSI6M319fQ==", miles: 4.4, state_id: 2, user_id: 1 )

# Trail.create(name: "Sterling Pond Trail", description: "Explore this 2.2-mile out-and-back trail near Jeffersonville, Vermont. Generally considered a moderately challenging route, it takes an average of 1 h 37 min to complete. This is a very popular area for hiking and walking, so you'll likely encounter other people while exploring.", image_url:"https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMjg5NzE0MTcvZjdiNmU3YmQxNTQ2MDljZTAzOTcxNjlhMjY1N2M0MDMuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjoyMDQ4LCJoZWlnaHQiOjIwNDgsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsImpwZWciOnsidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWlzZVNjYW5zIjp0cnVlLCJxdWFudGlzYXRpb25UYWJsZSI6M319fQ==", miles: 2.2, state_id: 3, user_id: 3)

user = User.create([
  {
    username: "marojni", 
    password: "icecream"
   }
]);
puts "🏕 Seeding users..."



trails = Trail.create([
    {
        name: "Bear Mountain Loop",
        description: "Check out this 3.8-mile loop trail near Bear Mountain, New York.",
        image_url: "https://takeahike.us/wp/wp-content/uploads/2019/10/BearMountain17.jpg",
        miles: "3.8"
    },
    {
        name: "Cornish Estate Trail",
        description: "njoy this 1.8-mile out-and-back trail near Cold Spring, New York.",
        image_url: "https://images.squarespace-cdn.com/content/v1/5a5bee9e9f07f57985d922ef/1528663595821-RAQDOVKG5NNGWWXPIJ9O/FullSizeRender.jpg?format=1000w",
        miles: "1.8"
    },
    {
        name: "Welch-Dickey Loop Trail",
        description: "Check out this 4.4-mile loop trail near Thornton, New Hampshire.",
        image_url: "https://1.bp.blogspot.com/-bAi0SilTWGc/X3OcTHM9wwI/AAAAAAAALq4/-T5SlEBKK8UoTOOtFdQFimdg2kK8HKBSQCLcBGAsYHQ/w1200-h630-p-k-no-nu/IMG_7636.JPEG",
        miles: "4.4"
    },
    {
        name: "Sterling Pond Trail",
        description: "Explore this 2.2-mile out-and-back trail near Jeffersonville, Vermont.",
        image_url: "https://gostowe.com/wp-content/uploads/2020/09/Stowe_Summer_Sterling-Pond_MarkVandenberg_DSC_0443-scaled.jpg",
        miles: "2.2"
    },
]);
puts "🏕 Seeding trails..."


reviews = Review.create([
    {
    title: "Fantastic Trail",
    body: "Great trail overlooking the mountains! Perfect for kids",
    user_id: User.first.id,
    trail_id: Trail.first.id
},
    title: "Fun time with family",
    body: "Had a good time with family. Medium hard trail",
    trail_id: Trail.first.id,
    user_id: User.first.id
]);
puts "🏕 Seeding reviews..."