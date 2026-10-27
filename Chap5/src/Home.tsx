interface HomeProps {
    label: string;
}

export default function Home({ label }: HomeProps) {
    return <div>{ label } </div>;
}