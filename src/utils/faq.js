import annualIncomeImage from "../assets/annualIncome.png";

export const faqSmall = [
  {
    question: "What is Bitcoin?",
    answer:
      "The Australian Taxation Office (ATO) regards cryptocurrency as both property, which is subject to Capital Gains Tax (CGT), and income, which is subject to Income Tax. CGT applies when you sell, trade, gift, or make purchases using cryptocurrency. On the other hand, Income Tax applies when you receive cryptocurrency as payment for services, work, mining, staking, or other activities. To simplify tax calculations, consider using a free crypto tax calculator for Australia.",
  },
  {
    question:
      "Lorem ipsum dolor sit amet",
    answer:
      "The distinction between long-term and short-term capital gains lies in the duration of ownership. When you own an asset, such as cryptocurrency, for more than 12 months, any gains from its sale are categorised as long-term. These long-term gains often receive a 50% discount on the capital gains tax (CGT). In contrast, if you hold the asset for 12 months or less, the gains are considered short-term, and they are taxed at your regular income tax rate.",
  },
];

export const faqLarge = [
  {
    question: "How do I lower my cryptocurrency taxes?",
    answer:
      "Here are the top 6 strategies for lowering your cryptocurrency taxes in Australia:",
    lists: [
      {
        listHead: "Hold for over 12 months-",
        listBody:
          " Hold your crypto for more than 12 months to qualify for a 50% long-term CGT discount to reduce your tax liability.",
      },
      {
        listHead: "Offset gains with losses-",
        listBody:
          " Offset capital gains with capital losses from cryptocurrency, reducing your overall tax burden",
      },
      {
        listHead: "Claim tax deductions-",
        listBody:
          " Explore opportunities to claim significant deductions on your regular income if you're a trader or running a crypto business.",
      },
      {
        listHead: "Use crypto tax tools-",
        listBody:
          " Employ crypto tax software like KoinX or seek help from a crypto tax specialist to streamline calculations and ensure compliance.",
      },
      {
        listHead: "Donate to charities-",
        listBody:
          " Donate cryptocurrency to registered charities since it’s not a taxable event, and claim deductions on the donated amount.",
      },
      {
        listHead: "Full disclosure-",
        listBody:
          " Be transparent and disclose all your crypto transactions to the ATO to avoid penalties for hiding trading activities.",
      },
    ],
  },
  {
    question: "How do I use a cryptocurrency tax calculator?",
    paragraph:
      "In order to use a cryptocurrency tax calculator, you need to input information about your cryptocurrency transactions.",
    paragraph2:
      "After you enter your information, the cryptocurrency tax calculator will calculate the gain or loss on every transaction.",
    numberListHead: "This includes:",
    numberListBody: [
      "The financial year you want to calculate your taxes for",
      " The country you want to calculate your taxes for.",
      "The purchase price of the coin.",
      "The sale price of the coin.",
    ],
    numberListHead2: "This includes:",
    numberListBody2: [
      "The total profit/loss you made",
      "The tax you’re liable to pay",
    ],
    doubts: "Still have doubts?",
    contact: "Consult with a crypto taxation expert",
  },
  {
    question: "How do I calculate my crypto tax in Australia?",
    paragraph:
      "To calculate your crypto tax in Australia accurately, you need to consider both income tax and capital gains tax.",
    boldSubTitle: "Income Tax",
    paragraph3:
      "In Australia, when an individual (investor) sells, trades, spends, earns (salary, mining, interest) or gifts cryptocurrency, the net capital gain is taxed at the same rate as their Income Tax. This tax rate is determined based on their total income for the tax year.",
    boldSubTitle2: "ATO Individual Income Tax Rates 2022–2023",
    image: annualIncomeImage,
  },
  {
    CGTTitle: "Capital Gains Tax (CGT)",
    CGTBody:
      "Calculate your capital gains or losses on cryptocurrency transactions using this formula:",
    CGTFormula: "Capital Gain/Loss = Capital Proceeds - Cost Basis",
    note: "Note:",
    capitalProceeds: "Capital Proceeds (sale value or any form of receipt)",
    costBasis:
      "Cost Basis (costs incurred to acquire, hold, and dispose of the asset)",
    taxRate:
      "Your tax rate depends on whether you held the cryptocurrency for more than 12 months (long-term) or less (short-term). Long-term gains receive a 50% discount.",
    calculatorInfo:
      "Calculate your Australian crypto taxes accurately and effortlessly with KoinX's free crypto tax calculator for Australia. It simplifies the process, ensuring compliance with the latest tax rates and regulations making crypto tax calculations easy and precise.",
  },
];
