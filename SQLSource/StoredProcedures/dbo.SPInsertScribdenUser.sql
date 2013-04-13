IF EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[SPInsertScribdenUser]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[SPInsertScribdenUser]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

/***************************************************************************

Author: Jonathan S. Collins Leon
Desc: Gets a user given a username
Modified: 04/04/2013
Exec: EXEC SPInsertScribdenUser 'testUser', 'testPassword'

****************************************************************************/

CREATE PROCEDURE [dbo].[SPInsertScribdenUser]
	@Username varchar (255),
	@Password varchar (255)

AS

INSERT INTO ScribdenUser (Username, Password)
VALUES (@Username, @Password)

GO