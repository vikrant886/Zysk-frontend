import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

const faqs = [
    {
        question: "Is there a free trial available?",
        answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
        question: "Can I change my plan later?",
        answer: "Yes, you can change your plan at any time. Simply contact our support team and they'll assist you with the process.",
    },
    {
        question: "What is your cancellation policy?",
        answer: "You can cancel your subscription at any time. There are no long-term contracts or cancellation fees.",
    },
    {
        question: "Can other info be added to an invoice?",
        answer: "Yes, you can add custom information to your invoices. Please contact our support team for assistance.",
    },
    {
        question: "How does billing work?",
        answer: "We bill on a monthly basis. You'll be charged at the beginning of each billing cycle.",
    },
    {
        question: "How do I change my account email?",
        answer: "You can change your account email in your profile settings. If you need assistance, please contact our support team.",
    },
]

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null) // set initial value to null

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className="max-w-3xl flex flex-col mx-auto md:p-default-lr md:py-[96px] py-[64px] px-[16px] md:gap-[64px] gap-[48px]">
            <div className="flex flex-col gap-[20px]">
                <h2 className="text-3xl font-bold text-center mb-2">Frequently asked questions</h2>
                <p className="text-center text-[#475467] mb-8">Everything you need to know about the product and billing.</p>
            </div>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4">
                        <button
                            className="flex justify-between items-center w-full text-left"
                            onClick={() => toggleFAQ(index)}
                        >
                            <span className="text-lg font-medium text-[#101828]">{faq.question}</span>
                            {openIndex === index ? (
                                <ChevronUp className="h-5 w-5 text-gray-500" />
                            ) : (
                                <ChevronDown className="h-5 w-5 text-gray-500" />
                            )}
                        </button>
                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.p
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="mt-2 font-medium text-base text-[#475467]"
                                >
                                    {faq.answer}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    )
}
