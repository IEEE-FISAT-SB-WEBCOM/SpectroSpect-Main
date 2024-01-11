import img1 from '../assets/workshop1.png'
import img2 from '../assets/workshop2.png'
import img3 from '../assets/workshop3.png'
import img4 from '../assets/workshop4.png'
import Main1 from "../assets/Mathlabwk.png"
import Main2 from "../assets/Quantumwk.png"
import Main3 from "../assets/SpeechRecogwk.png"
import Main4 from "../assets/Blockwk.png"
import S1 from "../assets/Speaker1.png"
import S2 from "../assets/ShambuMaths.png"
import AIIMG from "../assets/AIIMGPROCESSING.png"
import FILTER from "../assets/FILTERDESIGN.png"
import DSP from "../assets/AnnapurnaDSP.png"
import SPEECH from "../assets/SHILESHSPEECH.png"

const WorkshopContent = [
    {
        ID:1,
        Name:"Digital Signal Processing using MATLAB",
        About:"Unlock the power of Digital Signal Processing (DSP) with our hands-on workshop using MATLAB! Join us for an immersive learning experience where you'll delve into the fundamentals of DSP and explore its real-world applications through practical exercises. Our workshop is designed for both beginners and intermediate learners, offering a comprehensive introduction to the essential concepts of DSP and showcasing how MATLAB can be a powerful tool in this field. Participants will gain a solid understanding of key DSP principles, such as filtering, spectral analysis, and signal processing techniques.",
        Perks:"Delve into the realm of Digital Signal Processing (DSP) with MATLAB at our Spectrospect workshop! This hands-on experience promises an exciting journey through the intricacies of digital signals. By participating, you'll not only master the art of signal processing but also gain proficiency in MATLAB—an invaluable skill in the tech world. The workshop offers expert guidance, networking opportunities, and a certification to validate your newfound expertise. Don't miss out on this chance to elevate your DSP skills and enhance your professional portfolio. Join us for a workshop that combines learning with practical application!",
        Speaker:"Annapurna S M",
        SpeakerImg:DSP,
        SpeakerDesc:"Get ready for an immersive learning experience at Spectrospect! Our four dynamic workshop sessions, curated by industry experts, cover a spectrum of topics, from hands-on technical sessions to insightful discussions on emerging trends. Whether you're a seasoned professional or a budding enthusiast, these workshops on February 16-18 offer a unique opportunity to delve deep into the practical aspects of cutting-edge technologies.",
        WImg:img1,
        MImg:Main1
    },
    {
        ID:2,
        Name:"Image Processing with AI ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ",
        About:"Experience the fusion of science and technology in our Quantum Signal Processing workshop. Dive into the world of quantum computing and its game-changing role in signal processing.",
        Perks:"Embark on a groundbreaking journey at our Quantum Signal Processing workshop during Spectrospect! Immerse yourself in the fusion of science and technology, exploring the transformative realm of quantum computing and its pivotal role in signal processing. By joining this workshop, you'll unlock a myriad of perks, including hands-on exposure to quantum technologies, insights into the future of signal processing, and the opportunity to interact with experts in the field. Seize the chance to be at the forefront of innovation, expanding your skill set and gaining a unique perspective on the convergence of quantum mechanics and signal processing. Elevate your understanding and expertise—register now for an illuminating experience! ",
        Speaker:"Karthik A",
        SpeakerImg:AIIMG,
        SpeakerDesc:"Get ready for an immersive learning experience at Spectrospect! Our four dynamic workshop sessions, curated by industry experts, cover a spectrum of topics, from hands-on technical sessions to insightful discussions on emerging trends. Whether you're a seasoned professional or a budding enthusiast, these workshops on February 16-18 offer a unique opportunity to delve deep into the practical aspects of cutting-edge technologies.",
        WImg:img2,
        MImg:Main2
    },
    {
        ID:3,
        Name:"Speech Recognition with Signal Processing",
        About:"Embark on a seamless interaction experience with our cutting-edge Speech Recognition with Signal Processing technology. Our innovative solution leverages advanced signal processing techniques to accurately convert spoken words into actionable commands. Enjoy hands-free convenience and improved accessibility as our state-of-the-art system interprets and responds to your voice with unparalleled precision. Explore a new era of user-friendly interfaces and efficient communication on our website, where technology meets simplicity in the realm of Speech Recognition with Signal Processing.",
        Perks:"Immerse yourself in the fascinating universe of Speech Recognition with our captivating workshop at Spectrospect! By participating, you gain access to a treasure trove of perks designed to enhance your knowledge and skills. Engage in hands-on learning to unravel the secrets of cutting-edge technology, exploring the intricacies of speech-to-text conversion. Whether you're a novice or a seasoned professional, this workshop provides a unique opportunity to grasp the basics and master advanced techniques in speech recognition. Empower yourself to harness the power of spoken language in the digital realm, gaining a competitive edge in the evolving landscape of technology. Elevate your expertise—register now for an enriching experience that promises to redefine your understanding of speech recognition! ",
        Speaker:"Dr Shailesh Sivan",
        SpeakerImg:SPEECH,
        SpeakerDesc:"Get ready for an immersive learning experience at Spectrospect! Our four dynamic workshop sessions, curated by industry experts, cover a spectrum of topics, from hands-on technical sessions to insightful discussions on emerging trends. Whether you're a seasoned professional or a budding enthusiast, these workshops on February 16-18 offer a unique opportunity to delve deep into the practical aspects of cutting-edge technologies.",
        WImg:img3,
        MImg:Main3
    },
    {
        ID:4,
        Name:"Introduction to Realization of Filters using MATLAB",
        About:"Embark on a transformative journey into the realm of signal processing with our 'Introduction to Realization of Filters Using MATLAB' workshop. This engaging and hands-on session is designed to provide participants with a comprehensive understanding of filter design and implementation using the powerful MATLAB software.In this workshop, participants will delve into the fundamental principles of digital signal processing and filter theory. Through a series of interactive sessions, we will guide you through the practical aspects of designing and realizing filters for various applications. Whether you are a novice or an experienced practitioner, this workshop caters to all skill levels, offering a valuable learning experience for everyone.",
        Perks:"Embark on an exhilarating journey at our immersive workshop, where Blockchain technology meets Signal Processing at Spectrospect! By joining, you'll unlock a host of perks designed to enrich your understanding and skills. Dive deep into the intersection of these dynamic fields, gaining insights into how Blockchain enhances signal processing applications. Enjoy hands-on learning, discovering the practical implications and potential of this powerful synergy. Network with industry experts, fostering collaborations in this cutting-edge domain. Elevate your expertise with a workshop that not only explores the convergence of Blockchain and Signal Processing but also equips you with the tools to navigate and innovate within these transformative landscapes. Don't miss this chance to be at the forefront of technology—register now! ",
        Speaker:"Abhinav Rajeev",
        SpeakerImg:FILTER,
        SpeakerDesc:"Get ready for an immersive learning experience at Spectrospect! Our four dynamic workshop sessions, curated by industry experts, cover a spectrum of topics, from hands-on technical sessions to insightful discussions on emerging trends. Whether you're a seasoned professional or a budding enthusiast, these workshops on February 16-18 offer a unique opportunity to delve deep into the practical aspects of cutting-edge technologies.",
        WImg:img4,
        MImg:Main4
    },
   
]

const SpeakerContent = [
    {
        ID:1,
        Speaker:"Sherin Kalathil",
        Desig:"Integrated Development Specialist - EY",
        SImg:S1,
        DescL:"In the realm of education, Sherin Kalathil emerges as a skilled trainer with 9 years of rich experience, unveiling his profound passion for the craft in a moment of spontaneous revelation.Specializing in both soft skills and technical training, he adeptly navigates diverse student categories, excelling in swiftly grasping technological tools. His flexibility and versatility shine through, enabling poise and competence in deadline-driven environments. Beyond training, Sherin extends his expertise as an Interview Coach, L&D Specialist, Soft Skills Trainer, Personality Development Faculty, Career Counsellor, and Virtual Producer at EY. With a rich blend of compassion and proficiency, Sherin continues to excel in the dynamic world of education and professional development."
    },
    {
        ID:2,
        Speaker:"RJ Shambu",
        Desig:"RJ",
        SImg:S2,
        DescL:"Step into the vibrant world of RJ Shambu, where charisma meets professionalism. As the dynamic Radio Jockey at Red FM 93.5 and the captivating VJ at Surya Comedy, Shambu seamlessly blends entertainment and expertise. Join us on a journey behind the scenes, exploring his illustrious career and the significant role he plays in shaping the airwaves of Kerala. Get ready for a glimpse into the personality that personifies the heart and soul of broadcasting in the region."
    },
    {
        ID:3,
        Speaker:"Vinitha Jayan",
        Desig:"Freelance corporate trainer",
        SImg:S1,
        DescL:"Dive into the dynamic realm of Vinitha Vijayan, a self-employed Freelancer Corporate Trainer specializing in Leadership, Customer Service, Professional Etiquette, Communication, and Team Building. Also, a seasoned Behavioral and Life Skills Facilitator, Campus to Corporate Certified Trainer, and Motivational Speaker. Vinitha, the driving force in professional development, transforms workshops into transformative experiences, shaping the leaders of tomorrow. Join us in unraveling the essence of Vinitha's impactful journey as a trailblazer in corporate training and motivation."
    },
]

export {WorkshopContent,SpeakerContent}
export default WorkshopContent