import { Outlet } from "react-router-dom"

function Profile() {
  return (
    <>
      <div>프로필 페이지입니다.</div>
      <Outlet/>
    </>
  )
}

export default Profile