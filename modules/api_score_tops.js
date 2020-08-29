"use strict";

const getScoreData = require("../api/getScoreData");

module.exports = {
    enabled: true,
    adminCommand: false,
    type: 'api_score_tops',
    info: '谱面前10成绩查询',
    command: ['ts', 'tops'],
    argsInfo: '[beatmap] (:mode)',
    args: ['beatmapStringWithoutUser', 'modeString'],
    argNecessity: [2, 0],
    addUserToArg: true,
    helpInfo: {
        defaultHelp: true,
        customHelp: "",
        defaultDetail: true,
        customDetail: ""
    },
    /**
     * @param {import("../command/Arg")} arg
     * @param {{admin, host, nedb, commandsInfo}} globalConstant
     */
    call: async (arg, globalConstant) => {
        try {
            let arg2 = await arg.getBeatmapId();
            let apiObjects = arg2.getOsuApiObject();
            return await new getScoreData(globalConstant.host, apiObjects, false, false, false, true).output();
        }
        catch (ex) {
            return ex;
        }
    }
};
