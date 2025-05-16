# 💼 FinShark – Financial Portfolio Management Platform

An end-to-end financial portfolio management application built using a **.NET 8 backend** and **React + Tailwind frontend**. It helps users monitor and manage their investments using live financial data powered by the **Financial Modeling Prep API**. The application follows clean architectural patterns including **MVC**, **Entity Framework**, and **REST APIs** with a responsive and interactive UI.

---

## 🛠️ Tech Stack

### 🧠 Backend:
- [.NET 8](https://dotnet.microsoft.com/en-us/download/dotnet/8.0) – Backend API
- **C#**, **Entity Framework Core** – ORM and business logic
- **SQL Server** – Relational database
- **REST API** – Data endpoints

### 🌐 Frontend:
- [React](https://react.dev/) – Component-based UI
- [Vite](https://vitejs.dev/) – Fast build tool
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first styling

### 📡 External APIs:
- [Financial Modeling Prep](https://site.financialmodelingprep.com/) – Live financial data

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/finshark.git
cd finshark
```

### 2. Install Dependencies

#### Frontend:
```bash
cd frontend
npm install
```

#### Backend:
No package install needed — ensure you have the .NET 8 SDK installed.

---

## 🔑 Environment Setup

### Backend (`api/`)

Edit the `appsettings.json` file:

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Your-SQL-Server-Connection-String"
  },
  "FMPKey": "Your-Financial-Modeling-Prep-API-Key"
}
```

### Frontend (`frontend/`)

Create a `.env` file in the `frontend` folder:

```env
VITE_API_KEY=Your-Financial-Modeling-Prep-API-Key
```

You can obtain the key by signing up at:  
➡️ https://site.financialmodelingprep.com/

---

## 📦 Run the Application

### 🔧 Run Backend (.NET 8 API)
```bash
cd api
dotnet watch run
```

### 🌐 Run Frontend (React + Vite + Tailwind)
```bash
cd frontend
npm run dev
```

---

## 📁 Project Structure

```
.
├── api/               # .NET 8 backend
│   ├── Controllers/   # API endpoints
│   ├── Models/        # Data models
│   └── ...            
└── frontend/          # React frontend
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   └── ...
```

---

## ⚙️ Features

- 📊 Real-time financial data display
- 💼 Portfolio tracking by assets, stocks, and investments
- ⚡ Fast and scalable backend with .NET 8 + EF Core
- 🧩 Modular RESTful API design
- 🎨 Responsive UI built with Tailwind CSS and React
- 🔐 Secure API key management
- 🔄 Clean MVC architecture and repository patterns

---

## 🧪 Development Tips

- Ensure SQL Server is running and the `DefaultConnection` string is correct
- Use `dotnet ef` tools for migrations if needed
- Tailwind is fully integrated and supports utility-first design
- FMP API is rate-limited — consider caching if scaling

---

## 🧾 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙌 Contributions

Pull requests are welcome! For significant changes, please open an issue first to propose your ideas.

---

## 📬 Contact

Created by **Nikesh Chithambaram**  
[LinkedIn](https://www.linkedin.com/in/nikeshchithambaram/) • [GitHub](https://github.com/cnikesh)
