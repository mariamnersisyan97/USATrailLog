import React, {useEffect} from 'react';
import UserListCard from "./UserListCard";
function UserList({user, trails}) {

useEffect(() => {
  console.log("Use effect for user");
  console.log(user.reviews)
}, [user])

  return (
    <div>
      {user.trails.length > 0 ? user.trails.map((trail) => {
        return (
          <div key={trail.id}>
            <UserListCard key={trail.id} trail={trail} />
          </div>
        )
      }): null }
    </div>
  
)
}

export default UserList;