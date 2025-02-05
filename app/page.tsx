import CheckoutForm from "@/components/CheckoutForm";
import HeroSection from "@/components/HeroSection";

function HomePage() {
    return (
        <div>
            <HeroSection />
            <CheckoutForm />
            {/* Footer */}
            <footer className="bg-gray-100 mt-16">
                <div className="container mx-auto px-4 py-8">
                    <p className="text-center text-gray-600">&copy; 2023 ELLEVO. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default HomePage;
