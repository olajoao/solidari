function Home() {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
            }}>
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-xl">
                    <h1 className="mb-5 text-5xl font-bold">Solidari</h1>
                    <p className="mb-5 text-xl text-neutral-content">
                        Conectando doadores a quem mais precisa! <br />
No Solidari, a gente faz a ponte da solidariedade acontecer. <br />
Com empatia, simplicidade e amor.
                    </p>
                    <div className="flex justify-center gap-5">
                        <button className="btn btn-accent">Quero doar</button>
                        <button className="btn btn-secondary">Preciso de ajuda</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
