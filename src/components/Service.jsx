import React from 'react';

export function Services() {
    const services = [
        { id: 1, name: "उत्पाद लिस्टिंग", description: "किसानों को अपनी फसलों और उत्पादों को हमारी ऐप पर आसानी से सूचीबद्ध करने की सुविधा प्राप्त होती है।" },
        { id: 2, name: "कीमतों पर बातचीत", description: "उपभोक्ता और खुदरा विक्रेता सीधे किसानों से संपर्क कर सकते हैं और मूल्य पर बातचीत कर सकते हैं, जिससे पारदर्शिता और उचित मूल्य निर्धारण सुनिश्चित होता है।" },
        { id: 3, name: "ट्रांजेक्शन प्रबंधन", description: "सुरक्षित और सुगम ट्रांजेक्शन प्रबंधन के लिए विभिन्न भुगतान विकल्प उपलब्ध हैं।" },
        { id: 4, name: "मार्केट ट्रेंड्स और एनालिटिक्स", description: "किसानों को वर्तमान बाजार रुझानों और मूल्य विश्लेषण के बारे में जानकारी प्राप्त होती है, जिससे वे बेहतर निर्णय ले सकते हैं।" },
        { id: 5, name: "सपोर्ट और हेल्पडेस्क", description: "उपयोगकर्ताओं को किसी भी समस्या या प्रश्न के लिए 24/7 सपोर्ट और हेल्पडेस्क की सुविधा उपलब्ध है।" },
        { id: 6, name: "खरीददारों के लिए विशेष प्रस्ताव", description: "नियमित ग्राहकों और खुदरा विक्रेताओं के लिए विशेष छूट और प्रस्ताव प्रदान किए जाते हैं।" },
        { id: 7, name: "शेयरिंग और रिव्यू फीचर्स", description: "उपयोगकर्ता अपने अनुभव साझा कर सकते हैं और उत्पादों पर रिव्यू लिख सकते हैं, जो अन्य खरीदारों के लिए सहायक हो सकता है।" },
        { id: 8, name: "प्रोमोशनल कैम्पेन", description: "किसानों के उत्पादों को बढ़ावा देने के लिए विभिन्न प्रचार गतिविधियों और कैम्पेन की पेशकश की जाती है।" },
        { id: 9, name: "सामाजिक मीडिया इंटिग्रेशन", description: "किसानों और खरीदारों के बीच संवाद और प्रचार के लिए सोशल मीडिया इंटिग्रेशन की सुविधा उपलब्ध है।" }
    ];

    return (
        <div>
            <div className='h-72 overflow-y-auto overflow-x-hidden sm:hidden auto-scroll'>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.map(service => (
                        <div key={service.id} className="border border-gray-300  p-4 rounded-lg bg-opacity-90 shadow-lg  transition-transform duration-300 transform hover:scale-105 hover:translate-y-1 h-[10rem]">
                            <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="hidden sm:block services p-4">
                <h2 className="text-2xl font-bold mb-4">हमारी सेवाएँ</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.map(service => (
                        <div key={service.id} className="border border-gray-300 bg-transparent p-4 rounded-lg bg-opacity-90 shadow-lg  transition-transform duration-300 transform hover:scale-105 hover:translate-y-1 h-[10rem]">
                            <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
