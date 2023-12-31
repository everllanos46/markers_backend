USE [markers_bd]
GO
/****** Object:  Table [dbo].[markers]    Script Date: 4/11/2023 9:55:29 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[markers](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[latitude] [float] NULL,
	[longitude] [float] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[projects]    Script Date: 4/11/2023 9:55:29 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[projects](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[nombre_proyecto] [nvarchar](255) NULL,
	[descripcion] [nvarchar](max) NULL,
	[user_id] [int] NULL,
	[marker_id] [int] NULL,
	[date] [datetime] NULL,
	[price] [numeric](18, 0) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[users]    Script Date: 4/11/2023 9:55:29 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[users](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[usern] [varchar](255) NULL,
	[email] [varchar](255) NULL,
	[pass] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[projects]  WITH CHECK ADD  CONSTRAINT [FK_markers] FOREIGN KEY([marker_id])
REFERENCES [dbo].[markers] ([id])
GO
ALTER TABLE [dbo].[projects] CHECK CONSTRAINT [FK_markers]
GO
ALTER TABLE [dbo].[projects]  WITH CHECK ADD  CONSTRAINT [FK_users] FOREIGN KEY([user_id])
REFERENCES [dbo].[users] ([id])
GO
ALTER TABLE [dbo].[projects] CHECK CONSTRAINT [FK_users]
GO
