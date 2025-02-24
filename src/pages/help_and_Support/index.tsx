import { HelpCircleIcon } from "lucide-react";
import Container from "../../components/Container"; // Importing the custom Container component

export default function HelpAndSupport() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold flex items-center gap-2">
                <HelpCircleIcon /> Help and Support
            </h1>
            <div className="mt-4">
                <Container className="p-4">
                    <p className="text-gray-600">
                        If you need help or have any questions, please contact our support team.
                    </p>
                </Container>
            </div>
            <div className="mt-4">
                <Container className="text-gray-600">
                    <h1 className="text-gray-600">
                        Report Problem!
                    </h1>
                </Container>
            </div>
        </div>
    );
}
