// src/pages/landingpage/landingpage.jsx

import React, { useState, useEffect } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import image from '../../assets/demox.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

/* ─────────────────────────────────────────────────────────────
   FAQItem — defined OUTSIDE the page component so it isn't
   recreated on every render (was inside before → bad practice)
───────────────────────────────────────────────────────────── */
const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div
    className={`border rounded-xl overflow-hidden transition-all duration-300 ${
      isOpen ? 'border-blue-300 shadow-sm' : 'border-gray-200'
    }`}
  >
    <button
      onClick={onClick}
      className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
    >
      <span className={`font-medium text-sm sm:text-base ${isOpen ? 'text-blue-700' : 'text-gray-800'}`}>
        {question}
      </span>
      <span className={`text-sm transition-transform duration-300 ml-4 shrink-0 ${isOpen ? 'text-blue-600' : 'text-gray-400'}`}>
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
      </span>
    </button>

    <div
      className={`transition-all duration-300 ease-in-out overflow-hidden ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}
    >
      <div className="px-4 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
        {answer}
      </div>
    </div>
  </div>
)

/* ─── data ─────────────────────────────────────────────────── */
const products = [
  { tag: '👥', color: 'bg-blue-100',   hovercolor: 'hover:bg-blue-50',   title: 'Employee Management', desc: 'Store and manage all employee information in one centralised platform.' },
  { tag: '📆', color: 'bg-green-100',  hovercolor: 'hover:bg-green-50',  title: 'Attendance Tracking',  desc: 'Track attendance in real-time and generate accurate reports effortlessly.' },
  { tag: '📋', color: 'bg-purple-100', hovercolor: 'hover:bg-purple-50', title: 'Leave Management',     desc: 'Simplify leave requests, approvals and balance management.' },
  { tag: '⭐', color: 'bg-orange-100', hovercolor: 'hover:bg-orange-50', title: 'Performance Reviews',  desc: 'Evaluate performance, set goals and boost employee productivity.' },
  { tag: '💲', color: 'bg-red-100',    hovercolor: 'hover:bg-red-50',    title: 'Payroll Management',   desc: 'Automate payroll processing and ensure accurate compensation.' },
  { tag: '📈', color: 'bg-cyan-100',   hovercolor: 'hover:bg-cyan-50',   title: 'Reports & Analytics',  desc: 'Generate insightful reports and make data-driven decisions with ease.' },
]

const pricingPlans = [
  {
    name: 'Starter',
    sub: 'Ideal for small teams getting started',
    price: '$0.00',
    features: ['Up to 50 Employees', 'Basic Analytics', 'Email Support', 'Standard Security'],
    highlight: false,
  },
  {
    name: 'Professional',
    sub: 'Perfect for growing businesses',
    price: '$10.00',
    features: ['Up to 500 Employees', 'Advanced Analytics', 'Priority Email Support', 'Advanced Security', 'Custom Reports'],
    highlight: true,
  },
  {
    name: 'Enterprise',
    sub: 'For large organisations with advanced needs',
    price: '$30.00',
    features: ['Unlimited Employees', 'Advanced Analytics', '24/7 Priority Support', 'Enterprise Security', 'Custom Reports', 'Dedicated Account Manager'],
    highlight: false,
  },
]

const faqs = [
  { question: 'What is EMS?',                         answer: 'EMS (Employee Management System) is an all-in-one HR platform that helps businesses manage employee data, track attendance, monitor performance, and streamline payroll — all from a single dashboard.' },
  { question: 'Is my data secure?',                   answer: 'Yes. We use industry-standard AES-256 encryption, secure cloud infrastructure, and regular security audits to ensure your employee data is always protected.' },
  { question: 'Can I try EMS for free?',              answer: 'Absolutely! We offer a 14-day free trial with full access to all features. No credit card required to get started.' },
  { question: 'Can I upgrade or downgrade my plan?',  answer: 'Yes, you can change your plan at any time from your account settings. Upgrades take effect immediately, and downgrades apply at the start of your next billing cycle.' },
  { question: 'How many employees can I manage?',     answer: 'Our Starter plan supports up to 50 employees, the Pro plan up to 500, and our Enterprise plan has no limit. You can upgrade anytime as your team grows.' },
]

/* ─── page ─────────────────────────────────────────────────── */
const LandingPage = () => {
  const [openIndex, setOpenIndex] = useState(null)
  const [visible, setVisible]     = useState(false)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <>
      {/* ═══════════════════════════════════════════════════
          Section
      ═══════════════════════════════════════════════════ */}
      <div id="home" className="relative min-h-screen bg-[#f8f9fc] overflow-hidden font-sans">

        {/* background blobs — scale down on mobile */}
        <div className="absolute -top-32 -left-32 sm:-top-52 sm:-left-52 w-72 h-72 sm:w-[500px] sm:h-[500px] rounded-full bg-[#eef2f9] opacity-80 pointer-events-none" />
        <div className="absolute top-0 right-0 w-64 h-48 sm:w-[700px] sm:h-[300px] bg-gradient-to-l from-[#f1f4fb] to-transparent rounded-bl-[120px] sm:rounded-bl-[220px] opacity-90 pointer-events-none" />
        <div className="absolute -bottom-24 -right-16 sm:-bottom-40 sm:-right-28 w-80 h-80 sm:w-[700px] sm:h-[700px] rounded-full bg-[#eef2fb] opacity-80 pointer-events-none" />

        <div className="relative z-10">
          <NavBar />

          <div className="px-5 sm:px-10 lg:px-20 pt-10 sm:pt-16 pb-16 sm:pb-20 max-w-5xl">

            <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <span className="text-yellow-500">★</span> Trusted by companies worldwide
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl mt-6 sm:mt-8 font-bold leading-tight">
              Manage Your Employees <br />
              <span className="text-blue-700">Smarter,</span> Not Harder
            </h1>

            <p className="text-base sm:text-xl text-gray-700 leading-relaxed mt-5 sm:mt-8 max-w-xl">
              Streamline HR processes, track performance, manage attendance and boost productivity — all in one place.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-5 mt-8 sm:mt-10">
              <Link to="/auth" className="bg-blue-600 hover:bg-blue-700 transition-colors duration-200 text-white text-base sm:text-xl rounded-2xl px-6 py-3 sm:p-4 cursor-pointer">
                Get Started Free 🡢
              </Link>
              <button className="bg-gray-50 hover:bg-gray-200 transition-colors duration-200 border text-blue-700 text-base sm:text-xl rounded-2xl px-6 py-3 sm:p-4 font-semibold cursor-pointer">
                Book a Demo
              </button>
            </div>

            {/* feature mini-cards */}
            <div className="flex flex-wrap gap-4 mt-14 sm:mt-20">
              {[
                { emoji: '👥', label: 'Centralised',    sub: 'Employee Data',  hover: 'hover:bg-blue-100'   },
                { emoji: '📈', label: 'Real-Time',      sub: 'Analytics',      hover: 'hover:bg-green-100'  },
                { emoji: '🛡️', label: 'Secure &',       sub: 'Reliable',       hover: 'hover:bg-purple-100' },
              ].map((c, i) => (
                <div key={i} className={`bg-white font-bold p-5 sm:p-6 rounded-2xl shadow-md ${c.hover} transition-colors duration-200 min-w-[140px]`}>
                  <div className="text-xl sm:text-2xl mb-2">{c.emoji}</div>
                  {c.label}
                  <div className="text-gray-800 text-sm font-semibold">{c.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          FEATURES
      ═══════════════════════════════════════════════════ */}
      <div id="features" className="bg-[#f8f9fc] font-sans py-10 sm:py-16">
        <div className="flex justify-center items-center flex-col gap-3 px-5 sm:px-10 text-center">
          <div className="text-sm font-bold text-blue-600 uppercase tracking-wide">Powerful Features</div>
          <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl max-w-xl">
            Everything You Need to Manage Your Workforce
          </h2>
          <p className="text-gray-600 font-medium min-w-lg text-sm sm:text-base">
            Our platform helps you automate HR tasks, track performance, and build a productive team.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-5 px-5 sm:px-10 lg:px-20 mt-10">
          {products.map((item, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl shadow-md p-5 flex h-30  items-start gap-5 ${item.hovercolor} transition-colors duration-200`}
            >
              <div className={`${item.color} rounded-2xl p-4 text-xl shrink-0`}>{item.tag}</div>
              <div>
                <div className="font-bold text-gray-900 mb-1">{item.title}</div>
                <div className="text-gray-600 text-sm leading-relaxed">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          PRICING
      ═══════════════════════════════════════════════════ */}
      <div id="pricing" className="bg-white font-sans py-10 sm:py-16">
        <div className="flex flex-col justify-center items-center gap-3 px-5 text-center">
          <div className="font-bold text-blue-700 text-sm uppercase tracking-wide">Pricing Plans</div>
          <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl">Simple, Transparent Pricing</h2>
          <p className="font-medium text-gray-700 text-sm sm:text-base">
            Choose the plan that's right for your business
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center gap-6 sm:gap-8 px-5 sm:px-10 mt-10 items-stretch">
          {pricingPlans.map((plan, i) => (
            <div
              key={i}
              className={` relative rounded-2xl shadow-md flex flex-col w-full max-w-sm mx-auto lg:mx-0
                          border-2 transition-all duration-200
                          ${plan.highlight
                            ? 'border-blue-700 shadow-blue-100 shadow-lg'
                            : 'border-transparent hover:border-blue-300'}`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-700 text-white text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="p-6 flex flex-col flex-1">
                <div className="font-bold text-lg text-gray-900">{plan.name}</div>
                <div className="font-medium text-gray-500 text-sm mt-1">{plan.sub}</div>

                <div className="font-bold text-4xl mt-5">
                  {plan.price}
                  <span className="font-medium text-sm text-gray-500"> /user/month</span>
                </div>

                <button className="mt-5 w-full py-2.5 border-2 border-blue-500 rounded-xl text-blue-700 font-medium hover:bg-blue-700 hover:text-white transition-colors duration-200 cursor-pointer">
                  Get Started
                </button>

                <ul className="flex flex-col gap-3 mt-6 flex-1">
                  {plan.features.map((f, j) => (
                    <li key={j} className="text-sm text-gray-700 flex items-center gap-2">
                      <span className="text-green-500 font-bold">✔</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          ALL-IN-ONE / EXPLORE
      ═══════════════════════════════════════════════════ */}
      <div id="resource" className="bg-[#f8f9fc] font-sans py-10 sm:py-16">
        <div className="flex flex-col lg:flex-row items-center gap-8 px-5 sm:px-10 lg:px-16 max-w-6xl mx-auto">

          <img
            src={image}
            alt="Platform preview"
            className="w-full max-w-sm lg:max-w-md rounded-3xl object-cover shadow-md"
          />

          <div className="text-blue-700 font-medium">
            <div className="text-sm uppercase tracking-wide">All-In-One Solution</div>
            <h2 className="font-bold text-3xl sm:text-4xl mt-4 text-black leading-tight">
              One Platform. <br /> Endless Possibilities.
            </h2>
            <ul className="mt-5 flex flex-col gap-3 font-semibold text-gray-700 text-sm sm:text-base">
              {[
                'Easy to use and beginner friendly',
                'Secure cloud-based platform',
                'Access anytime, anywhere',
                'Scalable for any size of business',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-green-500 font-bold">✔</span> {item}
                </li>
              ))}
            </ul>
            <button className="mt-8 text-white bg-blue-700 px-8 py-4 text-lg sm:text-xl rounded-xl cursor-pointer hover:bg-blue-600 transition-colors duration-200">
              Explore Resources 🡢
            </button>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          FAQ + CTA
      ═══════════════════════════════════════════════════ */}
      <div id="faq" className="bg-[#f8f9fc] font-sans py-10 sm:py-16">
        <div className="flex flex-col lg:flex-row gap-6 px-5 sm:px-10 lg:px-16 max-w-6xl mx-auto">

          {/* CTA card */}
          <div className="bg-[#f0f4ff] rounded-2xl p-8 sm:p-10 lg:p-14 flex-1 shadow-md">
            <div className="font-medium text-blue-600 text-sm uppercase tracking-wide">
              Ready to Get Started?
            </div>
            <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-black mt-6 leading-tight">
              Transform Your HR <br /> Management Today!
            </h2>
            <p className="mt-5 font-semibold text-gray-700 text-sm sm:text-base leading-relaxed max-w-sm">
              Join thousands of companies that trust EMS to manage their workforce efficiently.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link to="/auth" className="bg-blue-700 text-white px-6 py-3 rounded-2xl hover:bg-blue-600 cursor-pointer transition-colors duration-200 text-sm sm:text-base">
                Get Started Free
              </Link>
              <button className="border border-blue-700 text-blue-700 px-6 py-3 rounded-2xl hover:bg-gray-100 cursor-pointer transition-colors duration-200 text-sm sm:text-base">
                Book a Demo
              </button>
            </div>
          </div>

          {/* FAQ card */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 flex-1 shadow-md">
            <h3 className="font-bold text-lg sm:text-xl mb-5">Frequently Asked Questions</h3>
            <div className="flex flex-col gap-3">
              {faqs.map((faq, i) => (
                <FAQItem
                  key={i}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === i}
                  onClick={() => toggle(i)}
                />
              ))}
            </div>
          </div>

        </div>
      </div>


      {visible && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 bg-blue-700 hover:bg-blue-500 text-white p-4 rounded-full shadow-lg transition-all duration-300 cursor-pointer"
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}
    </>
  )
}

export default LandingPage