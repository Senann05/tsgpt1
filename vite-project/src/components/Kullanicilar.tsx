import { useState, useEffect } from "react"; 

type Kullanici = {
    id?: number;
    name?: string;
    username?:string[];
    email?:string[];
}
const Kullanicilar: React.FC<Kullanici> = () => {
const [kullanicilar, setKullanicilar] = useState<Kullanici[]>([]);
const [loading, setLoading] = useState<boolean>(true);

useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=> response.json())
    .then((data: Kullanici[])=>{
        setKullanicilar(data);
        setLoading(false);
    })
    .catch((error)=>console.error("xeta:", error));
})
return(
<div>
    <h2>Kullanicilar</h2>
    {loading? <p>Loading...</p> : null}
    <ul>
        {kullanicilar.map((kullanici)=>(
            <li 
            // key={kullanici.id}
            >{kullanici.name} - {kullanici.username} ----- {kullanici.email}</li>
        ))}
    </ul>
</div>
);
}
export default Kullanicilar;