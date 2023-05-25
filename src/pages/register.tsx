import RegisterForm from "@/components/forms/register";

export default function Register() {
    return (
        <section className="lg:grid lg:grid-cols-2 bg-gray-100 w-full min-h-screen overflow-auto">
            <div className="bg-gray-100 flex flex-col items-center justify-center">
                <RegisterForm />
            </div>
            <div className="h-full bg-orange-700">

            </div>
        </section>
    )
}