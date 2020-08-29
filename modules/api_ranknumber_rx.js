"use strict";

const getBestScoresData = require("../api/getBestScoresData");

module.exports = {
    enabled: true,
    adminCommand: false,
    type: 'api_ranknumber_rx',
    info: '查询成绩统计数量（relax模式）',
    command: ['rnrx', 'rxrn'],
    argsInfo: '(user) (:mode)',
    args: ['userStringWithoutBeatmap', 'modeString'],
    argNecessity: [1, 0],
    addUserToArg: false,
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
        let apiObjects = arg.getOsuApiObject();
        return await new getBestScoresData(globalConstant.host, apiObjects, true).outputRankNumber();
    }
};
