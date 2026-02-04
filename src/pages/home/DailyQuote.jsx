import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const DailyQuote = () => {
    const [quoteId, setQuoteId] = useState('quote1');
    const { t } = useTranslation();

    useEffect(() => {
        // Gera um número aleatório entre 1 e 2 (número total de citações)
        const randomNumber = Math.floor(Math.random() * 2) + 1;
        setQuoteId(`quote${randomNumber}`);
    }, []);

    return (
        <div className="flex items-center justify-center h-auto mt-16 px-4 lg:px-16 lg:mx-8 py-8 bg-orange400">
            <div className="p-4 bg-orange-400 rounded-lg shadow-md shadow-right max-w-full md:max-w-2xl lg:max-w-3xl">
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white text-justify">
                    &ldquo;{t(`quotes.${quoteId}.text`)}&rdquo;
                </p>
                <p className="text-right text-md sm:text-lg md:text-xl lg:text-2xl italic text-white mt-2">
                    &mdash; {t(`quotes.${quoteId}.author`)}
                </p>
            </div>
        </div>
    );
};

export default DailyQuote;