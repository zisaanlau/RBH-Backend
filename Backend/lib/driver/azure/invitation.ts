import { runQuery, runQueryGetOne } from './azure';
import * as _ from 'lodash';
import { promises } from 'dns';

export const insertInvitationInfo = async (username: string, houseId: number): Promise<Boolean> => {
    return runQueryGetOne(
        `declare @tempUserName nvarchar(255);
        declare @tempHouseName nvarchar(255);
        declare @userId int;
		select @userId = dbo.users.id
		from dbo.users
		where users.userName = \'${username}\'

        select @tempHouseName = dbo.houses.full_name
        from dbo.houses
        where houses.id = ${houseId}
        
        insert into dbo.invitations(userName, houseName, userId, houseId) VALUES (\'${username}\',@tempHouseName,@userId,${houseId})`
    )
        .then(() => {
            return true;
        })
        .catch(() => {
            return false;
        });
};

export const getInvitationInfo = async (userId: number): Promise<IInvitation[]> => {
    return runQueryGetOne(`
    select *
    from dbo.invitations
    where id = ${userId}
    `);
};

export const acceptInvitation = async (id: number): Promise<Boolean> => {
    return runQueryGetOne(`
    declare @tempuserId int;
    declare @temphouseId int;
    select 
    @tempuserId = dbo.invitations.userId, @temphouseId = dbo.invitations.houseId
    from dbo.invitations
    where id = ${id};

    delete from dbo.invitations where id = ${id};

    insert into dbo.User2Houses(HouseId,userId)Values(@temphouseId,@tempuserId)	
    `).then(() => {
        return true;
    }).catch(() => {
        return false;
    });
};

export const declineInvitation = async (id: number): Promise<Boolean> => {
    return runQueryGetOne(`
    delete from dbo.invitations where id = ${id};
    `).then(() => {
        return true;
    }).catch(() =>{
        return false;
    });
};