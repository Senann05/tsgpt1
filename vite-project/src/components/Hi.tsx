type Props = {
    isim?: string;
    yas?: number;
};

const Hi: React.FC<Props>= ({isim="Amaliya", yas=  19}) => {
    return(
        <div>
            <h2>Salam, {isim}!</h2>
            <h3>Yash: {yas}</h3>
        </div>
    )
}
export default Hi;