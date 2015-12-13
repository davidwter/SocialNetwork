Blockly.JavaScript['avancer_d_une_case'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'AvancerUneCase();';
  return code;
};


Blockly.JavaScript['tresor_atteint'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'tresorAtteint()';
  return [code,Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['next_is_bug'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'nextIsBug()';
  return [code,Blockly.JavaScript.ORDER_FUNCTION_CALL];
};


Blockly.JavaScript['sauter_une_case'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'SauterUneCase();';
  return code;
};

Blockly.JavaScript['demarrage'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  return code;
};

Blockly.JavaScript['repeter_n_fois'] = function(block) {
  // Repeat n times.
  if (block.getField('fois')) {
    // Internal number.
    var repeats = String(Number(block.getFieldValue('fois')));
  } else {
    // External number.
    var repeats = Blockly.JavaScript.valueToCode(block, 'fois',
        Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  }
  var branch = Blockly.JavaScript.statementToCode(block, 'DO');
  branch = Blockly.JavaScript.addLoopTrap(branch, block.id);
  var code = '';
  var loopVar = Blockly.JavaScript.variableDB_.getDistinctName(
      'count', Blockly.Variables.NAME_TYPE);
  var endVar = repeats;
  if (!repeats.match(/^\w+$/) && !Blockly.isNumber(repeats)) {
    var endVar = Blockly.JavaScript.variableDB_.getDistinctName(
        'repeat_end', Blockly.Variables.NAME_TYPE);
    code += 'var ' + endVar + ' = ' + repeats + ';\n';
  }
  code += 'for (var ' + loopVar + ' = 0; ' +
      loopVar + ' < ' + endVar + '; ' +
      loopVar + '++) {\n' +
      branch + '}\n';
  return code;
};