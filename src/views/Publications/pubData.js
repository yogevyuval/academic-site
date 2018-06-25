const pubData = [
  {
    title: "Congested Clique Algorithms for Graph Spanners",
    authors: ["Eylon Yogev", "Merav Parter"],
    location: "Manuscript",
    pdf: "https://arxiv.org/pdf/1805.05404.pdf",
	date: "2018"
  },
  {
    title: "On Distributional Collision Resistant Hashing",
    authors: ["Eylon Yogev", "Ilan Komargodski"],
    location: "CRYPTO 2018",
    pdf: "https://eprint.iacr.org/2018/480.pdf",
	date: "2018"
  },
  {
    title: "Another Step Towards Realizing Random Oracles: Non-Malleable Point Obfuscation",
    authors: ["Eylon Yogev", "Ilan Komargodski"],
    location: "EUROCRYPT 2018",
    pdf: "https://eprint.iacr.org/2018/149.pdf",
	date: "2018"
  },
  {
    title: "Distributed Computing Made Secure: A New Cycle Cover Theorem",
    authors: ["Eylon Yogev", "Merav Parter"],
    location: "Manuscript",
    pdf: "https://arxiv.org/abs/1712.01139",
	date: "2018"
  },
  {
    title: "Non-Interactive Multiparty Computation without Correlated Randomness",
    authors: ["Eylon Yogev", "Shai Halevi", "Yuval Ishai", "Abhishek Jain", "Ilan Komargodski", "Amit Sahai"],
    location: "ASIACRYPT 2017",
    pdf: "https://eprint.iacr.org/2017/871.pdf",
  date: "2018",
  video: "https://www.youtube.com/watch?v=o3ogkdrzoP0"
  },
  {
    title: "Collision Resistant Hashing for Paranoids: Dealing with Multiple Collisions",
    authors: ["Eylon Yogev", "Ilan Komargodski", "Moni Naor"],
    location: "EUROCRYPT 2018",
    pdf: "http://eprint.iacr.org/2017/486.pdf",
	date: "2018"
  },
  {
    title: "White-Box vs. Black-Box Complexity of Search Problems: Ramsey and Graph Property Testing",
    authors: ["Eylon Yogev", "Ilan Komargodski", "Moni Naor"],
    location: "FOCS 2017",
    pdf: "https://eccc.weizmann.ac.il/report/2017/015/",
	  date: "2017",
    custom: {text: "Goldreich's take", "url": "http://www.wisdom.weizmann.ac.il/~oded/MC/216.html"},
    video: "https://slideslive.com/38904573/whitebox-vs-blackbox-search-problems-a-cryptographic-perspective"
  },
  {
    title: "The Deep Journey from Content to Collaborative Filtering",
    authors: ["Eylon Yogev", "Oren Barkan", "Noam Koenigstein"],
    location: "Manuscript",
    pdf: "https://arxiv.org/pdf/1611.00384",
	date: "2017"
  },
  {
    title: "The Journey from NP to TFNP Hardness",
    authors: ["Eylon Yogev", "Pavel Hubáček", "Moni Naor"],
    location: "ITCS 2017 (honorary invited)",
    pdf: "http://eccc.hpi-web.de/report/2016/199/",
	date: "2017",
	custom: {text: "Lecture Notes", "url":"https://arxiv.org/pdf/1801.00734.pdf"}
  },
  {
    title: "Hardness of Continuous Local Search: Query Complexity and Cryptographic Lower Bounds",
    authors: ["Eylon Yogev", "Pavel Hubáček"],
    location: "SODA 2017",
    pdf: "http://eccc.hpi-web.de/report/2016/063/",
	date: "2017"
  },
  {
    title: "Universal Constructions and Robust Combiners for Indistinguishability Obfuscation and Witness Encryption",
    authors: ["Eylon Yogev", "Prabhanjan Ananth", "Aayush Jain", "Moni Naor", "Amit Sahai"],
    location: "CRYPTO 2016",
    pdf: "http://eprint.iacr.org/2016/281.pdf",
    date: "2016",
    video: "https://www.youtube.com/watch?v=rZLiX4fx8Xs"
  },
  {
    title: "How to Share a Secret, Infinitely",
    authors: ["Eylon Yogev", "Ilan Komargodski", "Moni Naor"],
    location: "TCC 2016-B",
    pdf: "http://eccc.hpi-web.de/report/2016/023/download",
	date: "2016",
	journal: {text: "IEEE Transactions on Information Theory, 2017", url:"http://ieeexplore.ieee.org/document/8125701/"}
  },
  {
    title: "Bloom Filters in Adversarial Environments",
    authors: ["Eylon Yogev", "Moni Naor"],
    location: "CRYPTO 2015",
    pdf: "http://arxiv.org/pdf/1412.8356v2",
    date: "2015",
    video: "https://www.youtube.com/watch?v=uRgVuZezWy0"
  },
  {
    title: "Functional Encryption for Randomized Functionalities in the Private-Key Setting from Minimal Assumptions",
    authors: ["Eylon Yogev", "Ilan Komargodski", "Gil Segev"],
    location: "TCC 2015",
    pdf: "https://eprint.iacr.org/2014/868.pdf",
	date: "2015",
	journal: {text: "Journal of Cryptology 2017", url:"https://link.springer.com/article/10.1007/s00145-016-9250-8"}
  },
  {
    title: "One-Way Functions and (Im)Perfect Obfuscation",
    authors: ["Eylon Yogev", "Ilan Komargodski", "Tal Moran", "Moni Naor", "Rafael Pass", "Alon Rosen"],
    location: "FOCS 2014",
    pdf: "https://eprint.iacr.org/2014/347.pdf",
	date: "2014",
	video: "http://techtalks.tv/talks/one-way-functions-and-imperfect-obfuscation/61327/"
  },
  {
    title: "Secret-Sharing for NP",
    authors: ["Eylon Yogev", "Ilan Komargodski", "Moni Naor"],
    location: "ASIACRYPT 2014",
    pdf: "https://eprint.iacr.org/2014/213.pdf",
	date: "2014",
	journal: {text: "Journal of Cryptology 2015 (by invitation)", url:"http://link.springer.com/article/10.1007/s00145-015-9226-0"}
  },
  {
    title: "Tight Bounds for Sliding Bloom Filters",
    authors: ["Eylon Yogev", "Moni Naor"],
    location: "ISAAC 2013",
    pdf: "http://arxiv.org/pdf/1304.5872v6.pdf",
	date: "2013",
	journal: {text: "Algorithmica (by invitation)", url:"http://link.springer.com/article/10.1007%2Fs00453-015-0007-9"}
  }
];

export default pubData;
