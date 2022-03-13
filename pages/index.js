import { Content } from "../components";
import BooksContext from "../components/BooksContext/BooksContext";

export default function Home() {
    return (
        <BooksContext>
            <Content />
        </BooksContext>
    )
}
