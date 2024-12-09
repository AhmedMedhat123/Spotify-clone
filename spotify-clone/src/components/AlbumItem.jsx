import { useNavigate } from "react-router-dom"
const AlbumItem = ({ id, name, image, desc }) => {
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate(`album/${id}`)} className="card">
            <img src={image} alt="" className="rounded w-40" />
            <p className="font-bold mt-2 mb-1" >{name}</p>
            <p className="text-slate-200 text-sm">{desc}</p>
        </div>
    )
}

export default AlbumItem