# 🚀 RevSense – Customer Feedback Analytics & Sentiment Insights Platform

**Revsense** is an end-to-end AI-powered platform that extracts, processes, categorizes, and visualizes customer reviews from multi-source platforms to generate actionable business insights. It combines advanced NLP, real-time automation, and LLM-based reasoning to transform raw user feedback into strategic decision-making tools.

---

## 📌 Key Features

- 🔁 **Automated daily scraping** of reviews from platforms like Twitter, Play Store, App Store, and MouthShut using a scheduled Cron Job.
- 🧹 **NLP-based text preprocessing** with spaCy, including tokenization, punctuation removal, and stopword filtering.
- 🧠 **Semantic embedding generation** using Sentence-BERT (`nlptown/bert-base-multilingual-uncased-sentiment`).
- 🧭 **5-level hierarchical categorization** with 169+ unique leaf-level classes using cosine similarity.
- 📊 **Sentiment analysis** using a fine-tuned BERT model (Very Negative → Very Positive).
- 📝 **Category-wise summarization** for thematic understanding.
- 🔁 **LLM chunking strategy** for passing optimized summaries to Gemini LLM.
- ⚡ **High-speed data retrieval** with Redis database for efficient date-range queries.
- ⚙️ **FastAPI backend** for API access and front-end integration.
- 📈 **Interactive visualization dashboard** for stakeholders.

---

## 🔗 Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Backend**: FastAPI, Python 3.8+
- **AI/ML**: spaCy, Sentence Transformers, HuggingFace Transformers, BERT
- **Database**: Redis
- **LLM**: Google Gemini
- **Authentication**: Clerk
- **File Storage**: EdgeStore
- **Charts**: Chart.js, Recharts

---

## 🛠️ Environment Setup

### Prerequisites

Before setting up RevSense, ensure you have the following installed on your system:

- **Node.js** (v18.0.0 or higher) - [Download here](https://nodejs.org/)
- **Python** (v3.8 or higher) - [Download here](https://www.python.org/downloads/)
- **Git** - [Download here](https://git-scm.com/downloads)
- **Redis** - [Download here](https://redis.io/download)

### 1. Clone the Repository

```bash
git clone https://github.com/Henil-Prajapati/RevSense.git
cd RevSense
```

### 2. Frontend Setup (Next.js)

#### Install Dependencies
```bash
# Using npm
npm install

# OR using yarn
yarn install
```

#### Environment Configuration
Create a `.env.local` file in the root directory:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

# EdgeStore Configuration
EDGE_STORE_ACCESS_KEY=your_edgestore_access_key
EDGE_STORE_SECRET_KEY=your_edgestore_secret_key

# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:8000
```

#### Start the Frontend Development Server
```bash
# Using npm
npm run dev

# OR using yarn
yarn dev
```

The frontend will be available at [http://localhost:3000](http://localhost:3000)

### 3. Backend Setup (FastAPI)

#### Create Python Virtual Environment
```bash
# Navigate to the backend directory
cd app/fastApi

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate
```

#### Install Python Dependencies
```bash
# Install from requirements.txt
pip install -r ../../requirements.txt

# OR install specific packages
pip install fastapi uvicorn redis pandas spacy transformers torch sentence-transformers google-generativeai
```

#### Environment Configuration
Create a `.env` file in the `app/fastApi` directory:

```env
# Redis Configuration
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=your_redis_password

# Gemini API Configuration
GEMINI_API_KEY=your_gemini_api_key

# Database Configuration
DATABASE_URL=your_database_url

# API Configuration
API_HOST=0.0.0.0
API_PORT=8000
```

#### Start the FastAPI Backend Server
```bash
# From the app/fastApi directory
uvicorn app:app --reload --host 0.0.0.0 --port 8000

# OR using Python directly
python app.py
```

The backend API will be available at [http://localhost:8000](http://localhost:8000)

### 4. Redis Setup

#### Install Redis
**Windows:**
- Download Redis from [here](https://github.com/microsoftarchive/redis/releases)
- Extract and run `redis-server.exe`

**macOS:**
```bash
brew install redis
brew services start redis
```

**Linux (Ubuntu/Debian):**
```bash
sudo apt update
sudo apt install redis-server
sudo systemctl start redis-server
```

#### Verify Redis Installation
```bash
redis-cli ping
# Should return: PONG
```

### 5. Additional Setup

#### Install spaCy Language Model
```bash
python -m spacy download en_core_web_sm
```

#### Download Required ML Models
```bash
# This will be done automatically when you first run the application
# The models will be downloaded from HuggingFace
```

### 6. Running the Complete Application

#### Terminal 1 - Start Redis
```bash
redis-server
```

#### Terminal 2 - Start Backend
```bash
cd app/fastApi
source venv/bin/activate  # On Windows: venv\Scripts\activate
uvicorn app:app --reload --port 8000
```

#### Terminal 3 - Start Frontend
```bash
npm run dev
# OR
yarn dev
```

### 7. Access the Application

- **Frontend Dashboard**: [http://localhost:3000](http://localhost:3000)
- **Backend API**: [http://localhost:8000](http://localhost:8000)
- **API Documentation**: [http://localhost:8000/docs](http://localhost:8000/docs)

---

## 🚀 Quick Start Commands

```bash
# Clone and setup
git clone https://github.com/Henil-Prajapati/RevSense.git
cd RevSense

# Frontend setup
npm install
npm run dev

# Backend setup (in new terminal)
cd app/fastApi
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r ../../requirements.txt
uvicorn app:app --reload --port 8000
```

---

## 🔧 Troubleshooting

### Common Issues

1. **Port Already in Use**
   ```bash
   # Kill process on port 3000
   npx kill-port 3000
   
   # Kill process on port 8000
   npx kill-port 8000
   ```

2. **Python Dependencies Issues**
   ```bash
   # Upgrade pip
   pip install --upgrade pip
   
   # Install with specific version
   pip install torch==1.9.0
   ```

3. **Redis Connection Issues**
   ```bash
   # Check if Redis is running
   redis-cli ping
   
   # Start Redis service
   redis-server
   ```

4. **Node.js Version Issues**
   ```bash
   # Check Node version
   node --version
   
   # Use nvm to switch versions
   nvm use 18
   ```

---

## 📁 Project Structure

```
RevSense/
├── app/                          # Next.js app directory
│   ├── api/                      # API routes
│   ├── component/                # React components
│   ├── fastApi/                  # FastAPI backend
│   │   └── app.py               # Main FastAPI application
│   └── [pages]/                 # Next.js pages
├── components/                   # Shared components
├── lib/                         # Utility functions
├── public/                      # Static assets
├── requirements.txt             # Python dependencies
├── package.json                 # Node.js dependencies
└── README.md                    # This file
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📫 Contact

- **Henil Prajapati** - [LinkedIn](https://www.linkedin.com/in/henil-prajapati14/) - [GitHub](https://github.com/Henil-Prajapati)

---

## 🙏 Acknowledgments

- Thanks to all the open-source libraries and frameworks used in this project
- Special thanks to the HuggingFace team for the transformer models
- Thanks to the Next.js and FastAPI communities for their excellent documentation