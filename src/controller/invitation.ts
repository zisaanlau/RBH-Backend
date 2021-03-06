import { RequestHandler } from 'express';
import * as Azure from '../../lib/driver/azure/index';

export const createInvitation: RequestHandler = async (req, res) => {
    const result = await Azure.invitation.insertInvitationInfo(req.query.userName as any, req.query.houseId as any);
    return res.send(result);
};

export const getInvitation: RequestHandler = async (req, res) => {
    const result = await Azure.invitation.getInvitationInfo(req.query.userId as any);
    return res.send(result);
};

export const acceptInvitation: RequestHandler = async (req, res) => {
    const result = await Azure.invitation.acceptInvitation(req.query.id as any);
    return res.send(result);
};

export const declineInvitation: RequestHandler = async (req, res) => {
    const result = await Azure.invitation.declineInvitation(req.query.id as any);
    return res.send(result);
};

export const getAllUsers: RequestHandler = async (req, res) => {
    const result = await (await Azure.invitation.getAllUsers()).map((obj) => {
        return obj.userName;
    });
    return res.send(result);
};

export const checkInvitation: RequestHandler = async (req, res) => {
    const result = await Azure.invitation.checkInvitation(req.query.userName as any, req.query.houseId as any);
    return res.send(result);
};
