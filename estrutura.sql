-- A 
SELECT
    a.id_atendimento,
    p.nome_paciente,
    a.data_atendimento
FROM
    Pacientes p
JOIN 
    Atendimento a ON p.id_paciente = a.id_paciente 
WHERE
    a.data_atendimento >= DATE_SUB(NOW(), INTERVAL 6 MONTH)
    AND a.cd_especialidade = 'Neurologia';

-- B
SELECT
    p.nome_paciente,
    pr.descricao_prontuario,
    a.data_atendimento
FROM
    Pacientes p
JOIN 
    Atendimento a ON p.id_paciente = a.id_paciente
JOIN
    Prontuario pr ON a.id_prontuario = pr.id_prontuario
WHERE 
    p.id_paciente = 123;

