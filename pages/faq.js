import { useRouter } from "next/router";
import Image from "next/image";
import Login from "@/components/shared/Login";
import BaseLayout from "@/components/layouts/BaseLayout";
import { enGB, svSE, itIT } from "@/translations";
import BasePage from "../components/BasePage";
import React, { useState } from "react";
import Head from "next/head";
import Footer from "@/components/Footer";
import flowersMain from "@/public/decoration/flowers-main.png";

export default function FAQ({ hasReadPermission }) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en-GB" ? enGB : locale === "sv-SE" ? svSE : itIT;
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(-1);

  const handleQuestionClick = (index) => {
    setActiveQuestionIndex(index === activeQuestionIndex ? -1 : index);
  };

  if (!hasReadPermission) {
    return <Login redirectPath={router.asPath} />;
  }

  const questions = [
    {
      question: `${t.faq_question_1}`,
      answer: `${t.faq_answer_1}`
    },
    {
      question: `${t.faq_question_2}`,
      answer: `${t.faq_answer_2}`
    },
    {
      question: `${t.faq_question_3}`,
      answer: `${t.faq_answer_3}`
    },
    {
      question: `${t.faq_question_4}`,
      answer: `${t.faq_answer_4}`
    },
    {
      question: `${t.faq_question_5}`,
      answer: `${t.faq_answer_5}`
    },
    {
      question: `${t.faq_question_6}`,
      answer: `${t.faq_answer_6}`
    },
    {
      question: `${t.faq_question_7}`,
      answer: `${t.faq_answer_7}`
    },
    {
      question: `${t.faq_question_8}`,
      answer: `${t.faq_answer_8}`
    },
    {
      question: `${t.faq_question_9}`,
      answer: `${t.faq_answer_9}`
    },
    {
      question: `${t.faq_question_10}`,
      answer: `${t.faq_answer_10}`
    },
    {
      question: `${t.faq_question_11}`,
      answer: `${t.faq_answer_11 + " " + "#YatesWedding23"}`
    },
    {
      question: `${t.faq_question_12}`,
      answer: `${t.faq_answer_12}`
    }
  ];

  return (
    <BaseLayout>
      <BasePage>
        <Head>
          <title>FAQ</title>
        </Head>
        <h1 className="page-title">{t.faq_title}</h1>
        <div className='flowers-main' >
          <Image  src={flowersMain} alt='flowersMain'  width='130' />
        </div>
        <section>
          {questions.map((question, index) => (
            <div
              className={`faq ${activeQuestionIndex === index ? "faq--active" : ""}`}
              key={index}>
              <div className='faq__question' onClick={() => handleQuestionClick(index)}>
                <h3>{question.question}</h3>
                <div className='faq__toggle'>
                  <svg width='15' height='10' viewBox='0 0 42 25'>
                    <path
                      d='M3 3L21 21L39 3'
                      stroke='black'
                      strokeWidth='7'
                      fill='none'
                      aria-hidden='true'
                    />
                  </svg>
                </div>
              </div>

              {activeQuestionIndex === index && (
                <div className='faq__answer'>
                  <p>{question.answer}</p>
                </div>
              )}
            </div>
          ))}
        </section>
        <Footer />
      </BasePage>
    </BaseLayout>
  );
}
