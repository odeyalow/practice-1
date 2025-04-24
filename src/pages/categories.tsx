import ContentWrapper from '@/shared/components/contentWrapper';
import CategoriesList from '@/shared/components/categoriesList';

const Categories = () => {
    return (
        <ContentWrapper
        title='Categories'
        description='Looking for something specific?'>
            <CategoriesList limit={0}/>
        </ContentWrapper>
    );
}
 
export default Categories;