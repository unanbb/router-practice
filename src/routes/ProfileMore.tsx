import { useParams } from "react-router-dom";

function ProfileMore() {
  const { id } = useParams(); //이름 가져오기
  return (
    <div>{id}의 프로필 세부 페이지입니다.</div>
  )
}

export default ProfileMore