import Document, { Head, Main, Html, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <title>Relatorio Estágio IVT</title>
                <Head>
                </Head>
                <Main />
                <NextScript />
            </Html>
        )
    }
}