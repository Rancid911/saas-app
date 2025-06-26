import Image from "next/image";
import Link from "next/link";

const Cta = () => {
    return (
        <section className="cta-section">
            <div className="cta-badge">Начни учиться по своим правилам.</div>
            <h2 className="text-3xl font-bold">
                Большой выбор разговорных тем и практик
            </h2>
            <p>Выберите тему — и начните учиться через голосовые беседы, которые ощущаются естественными и увлекательными.</p>
            <Image src="images/cta.svg" alt="cta" width={362} height={232} />
            <button className="btn-primary">
                <Image src="/icons/plus.svg" alt="plus" width={12} height={12}/>
                <Link href="/companions/new">
                    <p>Начать учиться</p>
                </Link>
            </button>
        </section>
    )
}
export default Cta
