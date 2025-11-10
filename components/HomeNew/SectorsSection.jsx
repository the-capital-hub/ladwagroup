import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";

import sectors from "@/public/images/NewHome/sectors.png";
import Logo1 from "@/public/images/NewHome/logo1.png";
import Logo2 from "@/public/images/NewHome/logo2.png";
import Logo3 from "@/public/images/NewHome/logo3.png";
import Logo4 from "@/public/images/NewHome/logo4.png";
import Logo5 from "@/public/images/NewHome/logo5.png";
import Logo6 from "@/public/images/NewHome/logo6.png";
import Logo7 from "@/public/images/NewHome/logo7.png";

const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.15, duration: 0.6 },
        },
};

const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
};

const logos = [Logo1, Logo2, Logo3, Logo4, Logo5];

const sectorsData = [
        {
                title: "Engineering & Construction",
                description:
                        "Customized PPE, fall protection, and site safety systems for high-risk infrastructure projects.",
        },
        {
                title: "Oil, Gas & Petrochemicals",
                description: "Explosion-proof equipment and fire suppression designed for hazardous environments.",
        },
        {
                title: "Logistics & Warehousing",
                description: "Traffic management, signage, and ergonomic solutions that protect teams on the move.",
        },
];

export default function SectorsSection() {
        const navigate = useRouter();

        const handleNavigate = (sectionId) => {
                navigate.push(`/solutions#${sectionId}`);
        };

        return (
                <section className="relative py-10 md:py-16 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-[#F5FFFD] to-white" />
                        <div className="container mx-auto px-4 relative">
                                <motion.div
                                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.2 }}
                                        transition={{ duration: 0.6 }}
                                >
                                        <motion.div variants={containerVariants} className="space-y-6">
                                                <motion.span
                                                        className="px-4 py-2 text-sm font-semibold text-[#097362] bg-[#E6FFF9] rounded-full inline-flex items-center gap-2"
                                                        variants={itemVariants}
                                                >
                                                        <span className="w-2 h-2 rounded-full bg-[#0FA78E]" />
                                                        Industries We Empower
                                                </motion.span>

                                                <motion.h2
                                                        className="text-3xl md:text-5xl font-bold text-gray-900"
                                                        variants={itemVariants}
                                                >
                                                        25+ Years of Protecting People & Infrastructure
                                                </motion.h2>

                                                <motion.p
                                                        className="text-gray-600 text-base md:text-lg"
                                                        variants={itemVariants}
                                                >
                                                        LADWA partners with enterprises, governments, and global brands to deliver compliant safety ecosystems spanning audits, consulting, equipment, and digital monitoring.
                                                </motion.p>

                                                <motion.div
                                                        className="flex flex-wrap items-center gap-4"
                                                        variants={itemVariants}
                                                >
                                                        {logos.map((logo, index) => (
                                                                <div key={index} className="flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-sm border border-teal-100">
                                                                        <Image src={logo} alt={`Partner logo ${index + 1}`} width={60} height={60} />
                                                                </div>
                                                        ))}
                                                </motion.div>
                                        </motion.div>

                                        <motion.div variants={itemVariants} className="relative">
                                                <div className="absolute -inset-6 bg-[#E6FFF9] rounded-3xl blur-xl" />
                                                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                                        <Image src={sectors} alt="LADWA safety sectors" className="w-full h-full object-cover" />
                                                </div>
                                        </motion.div>
                                </motion.div>

                                <motion.div
                                        className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6"
                                        variants={containerVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.3 }}
                                >
                                        <motion.div
                                                className="bg-white/60 p-8 border-2 border-teal-200 rounded-2xl shadow-sm"
                                                whileHover={{ scale: 1.02 }}
                                                transition={{ duration: 0.2 }}
                                        >
                                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                                        Global Strategy & Partnerships
                                                </h3>
                                                <p className="text-gray-600 text-sm font-semibold mb-6">
                                                        LADWA is actively expanding its global footprint through:
                                                </p>
                                                <div className="space-y-2 text-black mb-6">
                                                        <p className="w-fit font-semibold md:p-3 text-sm md:text-lg p-5 bg-[#097362]/10 border-b-2 border-cyan-200 rounded-full">
                                                                International distributor partnerships
                                                        </p>
                                                        <p className="w-fit font-semibold md:p-3 text-sm md:text-lg p-5 bg-[#097362]/10 border-b-2 border-cyan-200 rounded-full">
                                                                Participation in top global expos (A+A, Intersec, NSC)
                                                        </p>
                                                </div>
                                                <div className="flex justify-between">
                                                        <Button
                                                                onClick={() => handleNavigate("offerings")}
                                                                className="bg-gradient-to-b from-[#097362] to-[#0FA78E] hover:bg-teal-700 text-white rounded-full cursor-pointer"
                                                        >
                                                                Know More
                                                        </Button>
                                                        <img src={Logo6.src} alt="LADWA global partnerships" />
                                                </div>
                                        </motion.div>

                                        <motion.div
                                                className="flex flex-col items-center justify-center bg-white/60 border-2 border-teal-200 p-8 rounded-2xl shadow-sm"
                                                whileHover={{ scale: 1.02 }}
                                                transition={{ duration: 0.2 }}
                                        >
                                                <img src={Logo7.src} alt="Partner with LADWA" />
                                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                                        Partner With LADWA
                                                </h3>
                                                <p className="text-gray-600 text-sm  font-semibold mb-6">
                                                        Whether you're an importer, distributor, EPC contractor, or government procurement agency — LADWA is your strategic ally for compliant, innovative, and scalable EHS products.
                                                </p>
                                                <Button
                                                        onClick={() => {
                                                                navigate.push("/contact-us");
                                                        }}
                                                        className="bg-gradient-to-b from-[#097362] to-[#0FA78E] hover:bg-teal-700 text-white rounded-full cursor-pointer"
                                                >
                                                        Know More
                                                </Button>
                                        </motion.div>
                                </motion.div>

                                <motion.div
                                        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
                                        variants={containerVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.4 }}
                                >
                                        {sectorsData.map((sector) => (
                                                <motion.div
                                                        key={sector.title}
                                                        className="bg-white/70 backdrop-blur rounded-2xl border border-teal-100 shadow-sm p-6"
                                                        variants={itemVariants}
                                                        whileHover={{ y: -6 }}
                                                >
                                                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{sector.title}</h3>
                                                        <p className="text-gray-600">{sector.description}</p>
                                                </motion.div>
                                        ))}
                                </motion.div>
                        </div>
                </section>
        );
}
