import { Request, Response, json } from 'express';
import pool from '../database';
// import { exists } from 'fs';
import moment from 'moment';
var now = moment().format('YYYY-MM-DD HH:mm:ss');
class DatosEmpleadoController {

    public async list(req: Request, res: Response): Promise<void> {
        console.log('entro a listar');
        const datos = await pool.query('SELECT * FROM datosEmpleado');
        console.log(datos);
        res.json(datos);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { clvEmpleado } = req.params;
        const rol = await pool.query('SELECT * FROM datosEmpleado WHERE clvEmpleado = ?', [clvEmpleado]);
        if (rol.length > 0) {
            return res.json(rol[0]);
        }
        res.status(404).json({ text: "El sitio no existe" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const { clvEmpleado } = req.params;
        const empleado = await pool.query('SELECT * FROM empleados WHERE clvEmpleado = ?', [clvEmpleado]);
        if (empleado.length > 0) {
            req.body.nombreCompleto = empleado[0]['nombre'] + ' ' + empleado[0]['apellidoPaterno'] + ' ' + empleado[0]['apellidoMaterno'];
            req.body.clvEmpleado = empleado[0]['clvEmpleado'];
            req.body.fechaCreacion = moment().format('YYYY-MM-DD HH:mm:ss');
            req.body.fechaIngreso = moment().format('YYYY-MM-DD HH:mm:ss');
            req.body.ultimaActualizacion = moment().format('YYYY-MM-DD HH:mm:ss');
            req.body.activo = true;
            const busquedaclv = await pool.query('SELECT * FROM datosEmpleado WHERE clvEmpleado = ?', [clvEmpleado]);; 
            console.log(req.body);
            if (busquedaclv.length > 0) {
                return res.status(200).send({ error: 'Ya existe un empleado registrado. ' });
            }
            
            const busquedarfc = await pool.query('SELECT * FROM datosEmpleado WHERE rfc = ?', [req.body.rfc]);; 
            if( busquedarfc.length > 0 ){
                return res.status(404).send({ error: 'Existe un empleado con el RFC identico.' });
            }
            
            const busquedanss = await pool.query('SELECT * FROM datosEmpleado WHERE nss = ?', [req.body.nss]);; 
            if( busquedanss.length > 0 ){
                return res.status(404).send({ error: 'Existe un empleado con el NSS identico.' });
            }
            const busquedacurp = await pool.query('SELECT * FROM datosEmpleado WHERE curp = ?', [req.body.curp]);; 
            if( busquedacurp.length > 0 ){
                return res.status(404).send({ error: 'Existe un empleado con el CURP identico.' });
            }
            const result = await pool.query('INSERT INTO datosEmpleado  set ?', [req.body]);    
                            if (!result) {
                                return res.status(404).send({ error: 'No se pudo crear los datos de empleado .' });
                            } else {
                                res.json({ message: 'Nuevo empleado guardado' });
                            }

            
        }
        res.status(404).json({ text: "El empleado no existe" });
        console.log(req.body);
        
        
        //SETEAMOS clvEmpleado PARA HACER LA BUSQUEDA POR CLAVE DE EMPLEADO
        
        console.log(req.body);
        if (req.body.nombreCompleto == null) {
            return res.status(500).send({ error: 'Envía los campos requeridos.' });
        }
        req.body.activo = true;
        const result = await pool.query('INSERT INTO datosEmpleado set ?', [req.body]);
        res.json({ message: 'Nuevo sitio guardado' });
        // var datosEmpleado = await pool.query('SELECT * FROM datosEmpleados WHERE clvEmpleado = ?', [clvEmpleado]);
        // if (datosEmpleado.length > 0) {
        //     return res.status(200).send({ error: 'Ya existe un sitio con esa clave de sitio. ' });
        // } else {

        //     const result = await pool.query('INSERT INTO datosEmpleados  set ?', [req.body]);
        //     res.json({ message: 'Nuevo sitio guardado' });
        // }
    }
    public async update(req: Request, res: Response): Promise<void> {
        const { clvEmpleado } = req.params;
        const oldSitio = req.body;
        if (req.body.nombreCompleto == null) {
            return res.status(200).send({ error: 'Verifique los campos. ' });
        }
        if (req.body.clvEmpleado.length != 8) {
            return res.status(200).send({ error: 'Clave de empleado no valida. ' });
        }
        // req.body.fechaIngreso = undefined;
        // req.body.fechaCreacion = undefined;
        req.body.ultimaActualizacion = moment().format('YYYY-MM-DD HH:mm:ss');

        var updateSitio = await pool.query('UPDATE datosEmpleado set ? WHERE clvEmpleado = ?', [req.body, clvEmpleado]);
        if (updateSitio.affectedRows <= 0) {
            res.json({ error: "No se pudo localizar el Empleado" });
        } else {
            res.json({ message: "Los datos del empleado fueron actualizados fue actualizado" });
        }

    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { clvEmpleado } = req.params;
        req.body.activo = false;
        const oldSitio = req.body;
        var updateSitio = await pool.query('UPDATE datosEmpleado set ? WHERE clvEmpleado = ?', [req.body, clvEmpleado]);
        if (updateSitio.affectedRows <= 0) {
            res.json({ error: "No se pudo localizar el Empleado" });
        } else {
            res.json({ message: "El sitio fue desactivado" });
        }
    }
    public async activate(req: Request, res: Response): Promise<void> {
        const { clvEmpleado } = req.params;
        req.body.activo = true;
        const oldSitio = req.body;
        var updateSitio = await pool.query('UPDATE datosEmpleado set ? WHERE clvEmpleado = ?', [req.body, clvEmpleado]);
        if (updateSitio.affectedRows <= 0) {
            res.json({ error: "No se pudo localizar el empleado" });
        } else {
            res.json({ message: "El Empleado fue activado" });
        }
    }
}
function MaysPrimera(string: string) {
    string = string.toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function convertName(string: string) {

    var res = string.split(" ");
    return res;
}

function cleanString(string: string) {
    string = string.trim();
    return string;
}

const datosEmpleadoController = new DatosEmpleadoController;
export default datosEmpleadoController; 