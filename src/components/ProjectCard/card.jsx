import bettervest from 'assets/icons/bettervest.png';
import trine from 'assets/icons/trine.png';
import ecoligo from 'assets/icons/ecoligo.png';
import energiseafrica from 'assets/icons/energiseafrica.png';
import lendahand from 'assets/icons/lendahand.png';
import Kenya from 'assets/icons/Kenya.svg';
import Senegal_Niger from 'assets/icons/Senegal_Niger.svg';
import Zambia from 'assets/icons/Zambia.svg';
import Nigeria from 'assets/images/Nigeria.svg';

const ProjectCard = [
  {
    id: 1,
    name: 'Azuri Luminosa Ltd Issue 3',
    text:
      'This is a loan to OOLU, distributed by Energize Africa. Your investment will help OOLU to install 1,000 Solar Home systems to families previously off-grid.',
    textMore:
      'Every £250 invested will enable OOLU Solar to provide a modular Solar Home System to a household previously off the grid. OOLU will use the funds to install 1,000 modular Solar Home Systems across Mali and Burkina Faso. OOLU distribute solar products from selected and reliable suppliers who are Lighting Global Certified. OOLUs current suppliers are Amped Innovation and Greenlight Planet. The first product which OOLU distribute is an entry-level solar home system and comes with a 5-10W PV panel, 20-40Wh LiFePO4 battery, 3-4 high efficiency LED lights and 1-2 USB charging ports. Their second system is a larger modular system that includes a 40W (up to 120W) PV panel, 100Wh (up to 180Wh) LiFePO4 battery, 6 high efficiencies LED lights, 2 USB charging ports and a TV. Providing families and individuals with access to a TV has multiple impact benefits. Firstly, keeping up to-date with local news and weather forecasts is important to them to better understand any developments that may impact them. Secondly, educational content on TV is typically very accessible for both children and adults, who are able to learn useful topics, such as farming techniques, through engaging story-telling. Furthermore, research has shown that TV shows often inspire viewers to reach higher, driving them to study and work harder. Finally, it provides an opportunity for families and friends to gather around and strengthen important social ties.',
    expRet: 5,
    maturity: 36,
    owner: 'Energise Africa',
    location: 'Kenya',
    amount: 500000,
    impRating: 'Coming Soon',
    riskRating: 'Coming Soon',
    map: Kenya,
    logo: energiseafrica,
    url: 'https://www.energiseafrica.com/invest/azuri-luminosa-ltd-issue-3-kenya-5-5-bond'
  },

  {
    id: 2,
    name: 'Greenlight Planet 7',
    text:
      'This is a loan to Greenlight Planet, distributed by Trine. Your investment will help Greenlight Planet to distribute around 5,000 units, providing estimated 8,200 people with access to electricity.',
    textMore:
      'Greenlight Planet is one of the leading providers of off-grid solar products in the world. Since 2009 Greenlight Planet has distributed its Sun King™ solar products to 10 million households, used by over 40 million people. Products are sold under the brand Sun King™, benefitting from strong customer recognition for having low price and high durability. The systems financed in this loan is more specifically the Sun King´s Home 400 and Home 60. ',
    expRet: 6,
    maturity: 30,
    owner: 'Trine',
    location: 'Kenya',
    amount: 650000,
    impRating: 'Coming Soon',
    riskRating: 'Coming Soon',
    map: Kenya,
    logo: trine,
    url: 'https://trine.com/loan/greenlight-planet-7'
  },

  {
    id: 3,
    name: 'OOLU Solar Issue 13',
    text:
      'This is a loan to OOLU, distributed by Energise Africa. Your investment will help OOLU to provide clean energy to 1,500 families in Senegal and Niger. ',
    textMore:
      'Approximately every £55 invested can enable OOLU Solar to provide a entry level Solar Home System to a family previously off the grid. OOLU distribute solar products from selected and reliable suppliers who are Lighting Global Certified. OOLU´s current suppliers are Amped Innovation and Greenlight Planet.  ',
    expRet: 6,
    maturity: 30,
    amount: 235000,
    owner: 'Energise Africa',
    location: 'Senegal & Niger',
    impRating: 'Coming Soon',
    riskRating: 'Coming Soon',
    map: Senegal_Niger,
    logo: energiseafrica,
    url: 'https://www.energiseafrica.com/invest/oolu-solar-issue-13-senegal-and-niger-6-bond'
  },
  {
    id: 4,
    name: 'Sollatek Kenya Issue 11',
    text:
      'This is a loan to Sollatek, distributed by Energise Africa. Your investment will help Sollatek to provide clean energy to 450 families in Kenya. ',
    textMore:
      'Every £200 invested will allow Sollatek to make a solar home system available to a family in rural Kenya that would otherwise be out of their financial reach. These systems are typically repaid over an 18 to 24 month period after which the family owns the system outright and can continue to enjoy the benefits of the clean energy produced. The funds raised under this campaign will be used to purchase larger, UK-manufactured 30W and 40W solar home systems, which are PAYGO enabled and can be used for running applications such as TVs, computers, fans, radios as well as lights and phone charging.  ',
    expRet: 5,
    maturity: 36,
    amount: 90000,
    owner: 'Energise Africa',
    location: 'Kenya',
    impRating: 'Coming Soon',
    riskRating: 'Coming Soon',
    map: Kenya,
    logo: energiseafrica,
    url: 'https://www.energiseafrica.com/invest/sollatek-kenya-issue-11-5-bond'
  },
  {
    id: 5,
    name: 'Solar-Home-Systeme für netzferne Haushalte in Sambia',
    text:
      'Your investment will help to install 3.600 solar-home systems in Samibia where only a third of people have access to electricity.',
    textMore: 'Read more on Bettervest website.',
    expRet: 6.5,
    maturity: 60,
    amount: 349900,
    owner: 'Bettervest',
    location: 'Sambia',
    impRating: 'Coming Soon',
    riskRating: 'Coming Soon',
    map: Zambia,
    logo: bettervest,
    url: 'https://www.bettervest.com/de/aktuelle-projekte/'
  },
  {
    id: 6,
    name: 'Photovoltaikaanlage für das Entsorgungsunternehmen Saner',
    text:
      'Your investment will cover the cost to install a solar system for the disposal company  Sanergy who fights environmental pollution in Nairobi, Nigeria.',
    textMore: 'Read more on Bettervest website.',
    expRet: 6,
    maturity: 92,
    owner: 'Bettervest',
    location: 'Kenya',
    amount: 246550,
    impRating: 'Coming Soon',
    riskRating: 'Coming Soon',
    map: Kenya,
    logo: bettervest,
    url: 'https://www.bettervest.com/de/projekt/Photovoltaik-Sanery-Kenia'
  },
  {
    id: 7,
    name: 'Daystar Power 10',
    text: 'teeeext',
    textMore: 'moorre teext',
    expRet: 7,
    maturity: 36,
    amount: 650000,
    owner: 'Trine',
    location: 'Nigeria',
    impRating: 'Coming Soon',
    riskRating: 'Coming Soon',
    map: Nigeria,
    logo: trine,
    url: 'https://www.trine.com/loan/daystar-power-10'
  }
];

export default ProjectCard;
