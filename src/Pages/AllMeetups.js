import { useState, useEffect} from "react";
// import { useCallback } from 'react';
import MeetupList from "../Components/layout/meetups/meetuplist";


   
function AllMeetupsPage(){
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups]= useState([]);

useEffect(()=>{
  setIsLoading(true);
  fetch( 
    'https://meetup-ad72c-default-rtdb.firebaseio.com/meetpus.json'
  ).then (response => {
    return response.json();
  }).then((data) =>{
    const meetpus=[];
    for (const key in data){
      const meetup ={
        id:key,
        ...data[key]
      };
      meetpus.push(meetup);
    }
    setIsLoading(false);
    setLoadedMeetups(meetpus);
  }); 
},[]);
  
  if (isLoading){
    return (
      <section>
        <p>Loading..</p>
      </section>
    );
  }
    return (<section>
        <h1>All Meetups</h1>
         {/* <ul>
             {DUMMY_DATA.map((meetup)=>{
                 return <li key={meetup.id}>{meetup.title}</li>
             })}
         </ul> */}
         <MeetupList meetups={loadedMeetups}/>
    </section>
    );  
}
export default AllMeetupsPage;