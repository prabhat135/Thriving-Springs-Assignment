// src/components/KpiCard.js
const KpiCard = ({ imgSrc, number, text }) => {
    return (
        <div className="bg-[F8FAFC] m-6 w-[243px] h-[105px] flex flex-wrap flex-col items-center text-center cursor-pointer">
            <div className="">
                <img src={imgSrc} alt={text} className="h-9 w-9" />
            </div>
            <div>
                <p className="text-2xl my-2 font-semibold">{number}</p>
                <p className="text-sm text-[#58595A]">{text}</p>
            </div>
        </div>
    );
};

export default KpiCard;
