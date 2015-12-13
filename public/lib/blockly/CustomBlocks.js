Blockly.Blocks['avancer_d_une_case'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Avancer d'une case");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['tresor_atteint'] = {
  init: function() {
    this.setColour(330);
    this.appendDummyInput()
        .appendField('trésor atteint');
    this.setOutput(true, 'Boolean');
  }
};

Blockly.Blocks['next_is_bug'] = {
  init: function() {
    this.setColour(330);
    this.appendDummyInput()
        .appendField('prochaine case = insecte');
    this.setOutput(true, 'Boolean');
  }
};

Blockly.Blocks['sauter_une_case'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Sauter une case");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['demarrage'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Démarrage");
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setMovable(false);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['repeter_n_fois'] = {
  /**
   * Block for repeat n times (external number).
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "Répéter %1 fois",
      "args0": [
    {
      "type": "field_dropdown",
      "name": "fois",
      "options": [
        [
          "3",
          "3"
        ],
        [
          "4",
          "4"
        ],
        [
          "8",
          "8"
        ]
      ]
    }],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 160,
      "tooltip": "",
      "helpUrl": ""
    });
    this.appendStatementInput('DO')
        .appendField(Blockly.Msg.CONTROLS_REPEAT_INPUT_DO);
  }
};