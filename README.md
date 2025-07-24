## 🚀 RevSense – Customer Feedback Analytics & Sentiment Insights Platform

 Revsense is an end-to-end AI-powered platform that extracts, processes, categorizes, and visualizes customer reviews from multi-source platforms to generate actionable business insights. It combines advanced NLP, real-time automation, and LLM-based reasoning to transform raw user feedback into strategic decision-making tools.

## 📌 Key Features
* 🔁 **Automated daily scraping** of reviews from platforms like Twitter, Play Store, App Store, and MouthShut using a scheduled Cron Job.
* 🧹 **NLP-based text preprocessing** with spaCy, including tokenization, punctuation removal, and stopword filtering.
* 🧠 **Semantic embedding generation** using Sentence-BERT (nlptown/bert-base-multilingual-uncased-sentiment).
* 🧭 **5-level hierarchical categorization** with 169+ unique leaf-level classes using cosine similarity.
* 📊 **Sentiment analysis** using a fine-tuned BERT model (Very Negative → Very Positive).
* 📝 **Category-wise summarization** for thematic understanding.
* 🔁 **LLM chunking strategy** for passing optimized summaries to Gemini LLM.
* ⚡ **High-speed data retrieval** with Redis database for efficient date-range queries.
* ⚙️ **FastAPI backend** for API access and front-end integration.
* 📈 **Interactive visualization dashboard** for stakeholders.


## ✅ Methodology & Workflow: Point-wise Explanation

### 🕒 Daily Review Scraping
* A **cron job runs every night** to scrape reviews automatically from platforms like Twitter, Play Store, App Store, and MouthShut.

### 🧹 Review Preprocessing
Reviews are cleaned using:
* **Tokenization**
* **Stopword removal** (using spaCy)
* **Lowercasing**
* **Removing punctuation**

### 🧠 Embedding Generation
* Preprocessed text is passed to **Sentence-BERT** (nlptown/bert-base-multilingual-uncased-sentiment).
* This generates **dense semantic vectors (embeddings)** for each review.

### 🧭 Hierarchical Category Classification
* We use **cosine similarity** between review embedding and category embeddings.
* Reviews are classified up to **5 levels of category hierarchy**.
* Total of **169 unique leaf categories** (e.g., App crash, Delivery delay, Taste quality).

### 🔢 Category Count & Tracking
* We **count reviews per category**, helping to identify which issues occur most frequently.

### 📊 Sentiment Analysis
Using **BERT model** to label reviews as:
* **Very Negative**
* **Negative**
* **Neutral**
* **Positive**
* **Very Positive**

### 📝 Summary Generation
* For each **category**, a **summary** of the reviews is created.
* Helps in quickly understanding the nature of feedback.

### 🧩 Chunking for LLM Processing
* The summaries are **divided into chunks** before passing to **Gemini LLM**.
* This helps manage **token size limits** and speeds up **processing time**.

### 📈 Insight Aggregation & Visualization
* Insights are grouped by **category and sentiment**.
* Displayed on a **dashboard for stakeholders** to interpret and act on.

---

## 🔗 Tech Stack

* **Languages:** Python, Bash (cron)
* **Frameworks:** FastAPI
* **Libraries:** spaCy, Sentence Transformers, HuggingFace Transformers, Redis-py, Pandas
* **LLMs:** Gemini
* **Storage:** Redis
* **DevOps:** Cron, GitHub
* **Deployment:** REST APIs for front-end consumption

---

## 🧠 Sample Insights Output

* 🎯 **Categories with highest volume and polarity**
* ⚠️ **Emerging issues and customer pain-points**
* 🔍 **Root cause analysis and customer intent**
* 📉 **Predicted business impact based on review sentiment trends**

---

## 💼 Use Cases

* **Product Teams** → Understand feature-level sentiment and usability bottlenecks
* **Marketing Teams** → Gauge customer satisfaction and campaign resonance
* **Customer Support** → Detect pain points before escalation
* **HR/People Ops** → Analyze employee reviews from platforms like AmbitionBox

---

## 📌 Future Enhancements

* ✅ **Multilingual support** for global review processing
* 🔗 **CRM integration** for real-time alerting
* 📲 **Expand to more review platforms** (e.g., YouTube comments, Instagram DMs, etc.)

---

## 🖼️ Example Output & Results
