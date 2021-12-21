// import React, { useState } from "react";
// import axios from "axios";

// export const IssueContext = React.createContext()

// export default function IssueProvider(props){
//   const userAxios = axios.create()
//   userAxios.interceptors.request.use(config => {
//     const token = localStorage.getItem("token")
//     config.headers.Authorization = `Bearer ${token}`
//     return config
//   })

//   const initState = { issues: [] }
//   const [ issueState, setIssueState ] = useState(initState)
//   console.log('issueState: ', issueState);
 
//   function addIssue(issue){
//     console.log('issue: ', issue);
//     userAxios.post("/api/issue", issue)
//       .then(res => setIssueState(prevState => ({
//         issues: [...prevState.issues, res.data]
//       })))
//       .catch(err => console.log(err))
//   }
//   function getUserIssues(){
//     userAxios.get("/api/issue/user")
//       .then(res => {
//         console.log(res)
//         setIssueState(() => ({
//           issues: res.data
//         }))})
//   }
//   return (
//     <IssueContext.Provider
//     value={{
//       ...issueState,
//       addIssue,
//       getUserIssues
//     }}
//     >
//       { props.children }
//     </IssueContext.Provider>
//   )
// }