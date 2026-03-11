# Task Management System

A full-stack web application that allows users to create, update, delete, and manage tasks with secure authentication and a responsive dashboard.

## Features

- **User Authentication:** Secure registration and login using ASP.NET Core Identity.
- **Personalized Dashboard:** Users only see and manage their own tasks.
- **CRUD Operations:** Full capability to Create, Read, Update, and Delete tasks.
- **Responsive UI:** Clean and modern interface built with Bootstrap, functioning seamlessly on both desktop and mobile devices.
- **Status Indicators:** Visual badges to quickly identify if a task is Pending or Completed.

## Technologies Used

- **Framework:** ASP.NET Core MVC (C#)
- **Database:** SQL Server (via Entity Framework Core)
- **Frontend:** HTML5, CSS3, JavaScript, Bootstrap 5
- **Authentication:** ASP.NET Core Identity

## Prerequisites

Before you begin, ensure you have the following installed:
- [.NET SDK](https://dotnet.microsoft.com/download) (Version 8.0 or later)
- SQL Server (LocalDB comes pre-installed with Visual Studio, or you can use SQL Server Express)
- Entity Framework Core CLI tools (`dotnet tool install --global dotnet-ef`)

## Getting Started

Follow these steps to set up and run the application locally:

1. **Clone or Extract the Repository:**
   Navigate to the root directory of the project (where the `.csproj` file is located).

2. **Restore Dependencies:**
   Run the following command to restore the required NuGet packages:
   ```bash
   dotnet restore
   ```

3. **Apply Database Migrations:**
   Create the local SQL Server database and apply the schema using Entity Framework:
   ```bash
   dotnet ef database update
   ```

4. **Run the Application:**
   Start the local development server:
   ```bash
   dotnet run
   ```

5. **Access the App:**
   Open your web browser and navigate to `http://localhost:5000` (or the port specified in your console output).

## Project Structure

- `Controllers/`: Contains the logic for routing and handling requests (`TasksController` handles task logic).
- `Models/`: Contains the C# classes representing the data (`TaskItem.cs`).
- `Views/`: Contains the Razor pages (`.cshtml`) for rendering the UI.
- `Data/`: Contains the Entity Framework database context and migrations.
- `wwwroot/`: Contains static assets like CSS, JavaScript, and libraries (Bootstrap, jQuery).
- `appsettings.json`: Configuration file containing the SQL Server database connection string.