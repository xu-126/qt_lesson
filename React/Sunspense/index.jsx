import React, { useState, Suspense } from 'react';
// function ProfilePage() {
// ProfilePage: xhr 请求：请求过程中 也会 loading
// }
// export default function SuspenseDemo() {
//   return (
//     <Suspense fallback={<div>loading profile</div>}>
//       <ProfilePage />
//     </Suspense>
//   )
// }
// 加载中 我们会 : laoding
const ProfilePage = React.lazy(() => import('./ProfilePage')); // Lazy-loaded


// Show a spinner while the profile is loading
export default function App() {
  return (
    <Suspense fallback={<div> App loading</div>}>
        {/* // ProfilePage: xhr 请求：请求过程中 也会 loading */}
      <ProfilePage /> 
    </Suspense>
  )
}