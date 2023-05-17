import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import GroupIcon from '@mui/icons-material/Group';
import WorkIcon from '@mui/icons-material/Work';
import NoAccountsIcon from '@mui/icons-material/NoAccounts';

export default function Icons (group: string) {
    switch (group) {
        case "Familia": return <FamilyRestroomIcon fontSize="large" style={{background: 'transparent'}}/>;
        case "Amigos": return <GroupIcon fontSize="large" style={{background: 'transparent'}}/>;
        case "Trabalho": return <WorkIcon fontSize="large" style={{background: 'transparent'}}/>;
        default: return <NoAccountsIcon fontSize="large" style={{background: 'transparent'}}/>;
    }
}