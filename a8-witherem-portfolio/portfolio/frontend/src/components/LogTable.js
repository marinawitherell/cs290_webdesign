import LogRow from './LogRow';
import TableHead from './TableHead';

function LogTable({ projects, onDelete, onEdit }) {
    return (
        <table id="projectsTable">
            <caption>Log of recent projects completed.</caption>
            <TableHead />
            <tbody>
                {projects.map((project, i) =>
                <LogRow
                    project={project}
                    key={i}
                    onDelete={onDelete}
                    onEdit={onEdit}
                    />)}
            </tbody>
            <tfoot>

            </tfoot>
        </table>
    );
}

export default LogTable;