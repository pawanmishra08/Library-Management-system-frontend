import { LayoutDashboard, BookOpen, UserCircle, BookmarkMinus } from "lucide-react";
import Container from "../../components/Container";

export default function Dashboard() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold flex items-center gap-2">
                <LayoutDashboard /> Dashboard
            </h1>
            <div className="grid grid-cols-3 gap-4 mt-4">
                <Container>
                    <div className="flex items-center justify-between">
                        <BookOpen size={40} />
                        <div>
                            <h2 className="text-lg font-semibold">Total Books</h2>
                            <p className="text-gray-600">0</p>
                        </div>
                    </div>
                </Container>
                <Container>
                    <div className="flex items-center justify-between">
                        <UserCircle size={40} />
                        <div>
                            <h2 className="text-lg font-semibold">Total Members</h2>
                            <p className="text-gray-600">0</p>
                        </div>
                    </div>
                </Container>
                <Container>
                    <div className="flex items-center justify-between">
                        <BookmarkMinus size={40} />
                        <div>
                            <h2 className="text-lg font-semibold">Borrowed Books</h2>
                            <p className="text-gray-600">0</p>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}
